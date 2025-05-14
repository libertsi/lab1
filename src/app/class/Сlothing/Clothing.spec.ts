import { IClothing } from "./IClothing";
import { Clothing } from "./Clothing";
import { ClothingFactory } from "./ClothingFactory";

describe('Test Clothing', () => {
    it('Creates Clothing', () => {
        const data = { name: 'Jeans', brand: 'Nike', price: 20, material: 'Cotton', clothingType: 'Jeans', size: 42, season: 'summer', belt: false };
        const clothing: IClothing = ClothingFactory.createClothing(data);
        expect(clothing).toBeDefined();
        expect(clothing.getName()).toBe(data.name);
        expect(clothing.getBrand()).toBe(data.brand);
        expect(clothing.getMaterial()).toBe(data.material);
        expect(clothing.getClothingType()).toBe(data.clothingType);
    });

});
