import { Clothing } from "./Clothing";


export class Accessories extends Clothing {
    private bodyPart: string = '';

    constructor(name: string, brand: string, price: number, material: string, clothingType: string, bodyPart: string) {
        super(name, brand,  price, material, clothingType);
        this.bodyPart = bodyPart;
    }

    getBodyPart(): string {
        return this.bodyPart;
    }
    
    override getPrice(): number {
        let price = super.getPrice();
        if(this.bodyPart === 'hand') price *= 2;
        else if(this.bodyPart === 'leg') price *= 0.5;
        return price;
    }
    override getDetails(): string[] {
        let details = super.getDetails();
        details.push(`Частина тіла: ${this.bodyPart}`);
        return details;
    }
}