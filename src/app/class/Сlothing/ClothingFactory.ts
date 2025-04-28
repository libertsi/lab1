import { сlothingType } from "./ClothingType";
import { Outerwear } from "./Outerwear";
import { Footwear } from "./Footwear";
import { Accessories } from "./Accessories";
import { IClothing } from "./IClothing";
import { Jeans } from "./Jeans";
export class ClothingFactory {
    static createClothing(data: any): IClothing {
        switch (data.clothingType) {
            case сlothingType[0]:
                return new Outerwear(data.name, data.brand, data.price, data.material, data.clothingType, data.size, data.season);
            case сlothingType[1]:
                return new Footwear(data.name, data.brand, data.price, data.material, data.clothingType, data.size, data.season, data.heel);
            case сlothingType[2]:
                return new Accessories(data.name, data.brand, data.price, data.material, data.clothingType, data.bodyPart);
            case сlothingType[3]:
                return new Jeans(data.name, data.brand, data.price, data.material, data.clothingType, data.size, data.season, data.belt);
            default:
                
                console.log();
                throw new Error('Немає такого одягу в магазині');
                
        }
    }
}