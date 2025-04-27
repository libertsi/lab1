import { Outerwear } from "./Outerwear";

export class Jeans extends Outerwear {
    private belt: boolean = false;

    constructor(name: string, brand: string, price: number, material: string, clothingType: string, size: number, season: string, belt: boolean) {
        super(name, brand, price, material, clothingType, size, season);
        this.belt = belt;
    }

    getBelt(): boolean {
        return this.belt;
    }
    
    override getPrice(): number {
        let price = super.getPrice();
        if(this.belt) price *= 2;
        return parseFloat(price.toFixed(1));
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Чи потрібен ремень: ${this.belt}`);
        return details;
    }
}