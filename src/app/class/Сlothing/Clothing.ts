import { IClothing } from "./IClothing";

export abstract class Clothing implements IClothing {
    private name: string = '';
    private brand: string = '';
    private price: number = 0;
    private material: string = '';
    private clothingType: string = '';

    
    constructor(name: string, brand: string, price: number, material: string, clothingType: string){ 
        if(price < 0){
            throw new Error('Ціна не може бути менша за 0');
        }
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.material = material;
        this.clothingType = clothingType;
    }

    getName(): string {
        return this.name;
    }

    getBrand(): string {
        return this.brand;
    }

    getPrice(): number {
        return this.price;
    }

    getMaterial(): string {
        return this.material;
    }

    getClothingType(): string {
        return this.clothingType;
    }

    getDetails(): string[] {
        return [];
    }
}