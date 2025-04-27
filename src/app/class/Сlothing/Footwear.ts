import { Outerwear } from "./Outerwear";

export class Footwear extends Outerwear {
    private heel: boolean = false;

    constructor(name: string, brand: string, price: number, material: string, clothingType: string, size: number, season: string, heel: boolean) {
        super(name, brand, price, material, clothingType, size, season);
        this.heel = heel;
    }

    getHeel(): boolean {
        return this.heel;
    }
    
    override getPrice(): number {
        let price = super.getPrice();
        if(this.heel) price *= 1.1;
        return parseFloat(price.toFixed(1));
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Чи є у взуття підбори: ${this.heel}`);
        return details;
    }
}