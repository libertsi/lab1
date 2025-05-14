import { ClothingFactory } from "./ClothingFactory";
import { IClothing } from "./IClothing";
import { Outerwear } from "./Outerwear";
import { Footwear } from "./Footwear";
import { Accessories } from "./Accessories";
import { Jeans } from "./Jeans";

describe('Test ClothingFactory', () => {
    it('Creates Outerwear', () => {
        const data = { name: 'Coat', brand: 'Nike', price: 20, material: 'Metal', clothingType: 'Outerwear', size: 1, season: 'summer' };
        const clothing: IClothing = ClothingFactory.createClothing(data);
        expect(clothing).toBeInstanceOf(Outerwear);
    });

    it('Creates Footwear', () => {
        const data = { name: 'Boots', brand: 'Nike', price: 20, material: 'Metal', clothingType: 'Footwear', size: 1, season: 'summer', heel: false };
        const clothing: IClothing = ClothingFactory.createClothing(data);
        expect(clothing).toBeInstanceOf(Footwear);
    });

    it('Creates Accessories', () => {
        const data = { name: 'Bracelet', brand: 'Nike', price: 20, material: 'Metal', clothingType: 'Accessories', bodyPart: 'hand' };
        const clothing: IClothing = ClothingFactory.createClothing(data);
        expect(clothing).toBeInstanceOf(Accessories);
    });

    it('Creates Jeans', () => {
        const data = { name: 'Jeans', brand: 'Nike', price: 20, material: 'Cotton', clothingType: 'Jeans', size: 42, season: 'summer', belt: false };
        const clothing: IClothing = ClothingFactory.createClothing(data);
        expect(clothing).toBeInstanceOf(Jeans);
    });

    it('Throws error for invalid type', () => {
        const data = { name: 'Unknown', brand: 'Nike', price: 20, material: 'Metal', clothingType: 'Unknown' };
        expect(() => ClothingFactory.createClothing(data)).toThrow(new Error('Немає такого одягу в магазині'));
    });
});

