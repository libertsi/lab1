import { Clothing } from "./Clothing";


export class Outerwear extends Clothing {
    private size: number = 1;
    private season: string = '';

    constructor(name: string, brand: string, price: number, material: string, clothingType: string, size: number, season: string) {
        super(name, brand,  price, material, clothingType);
        if(size <= 0) throw new Error('Розмір не може бути меншим за 0');
        this.size = size;
        this.season = season;
    }
    getSize(): number {
        return this.size;
    }
    getSeason(): string {
        return this.season;
    }
    override getPrice(): number {
        let price = super.getPrice();
        if(this.season === 'summer') price *= 1.1;
        else if(this.season === 'winter') price *= 1.2;
        return parseFloat(price.toFixed(1));
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Розмір: ${this.size}`);
        details.push(`Сезон: ${this.season}`);
        return details;
    }
}