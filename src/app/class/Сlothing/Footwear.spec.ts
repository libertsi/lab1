import { Footwear } from "./Footwear";
describe('Test Footwear', () => {
    let footwear: Footwear;
    beforeEach(() => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'summer', false);
    });
    it('Created footwear', () => {
        expect(footwear).toBeTruthy();
    });
    it('Create footwear with negative price', () => {
        expect(() => new Footwear('Boots', 'Nike', -20, 'Metal', 'Footwear', 1, 'summer', false)).toThrow(new Error('Ціна не може бути менша за 0'));
    });
    it('Check price summer', () => {
        expect(footwear.getPrice()).toBe(22);
    });
    it('Check price winter', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'winter', false);
        expect(footwear.getPrice()).toBe(24);
    });
    it('Check price spring', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'spring', false);
        expect(footwear.getPrice()).toBe(20);
    });
    it('Check heel true', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'summer', true);
        expect(footwear.getHeel()).toBe(true);
    });
    it('Check heel flse', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'summer', false);
        expect(footwear.getHeel()).toBe(false);
    });
    it('Check heels price with heels and summer', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'summer', true);
        expect(footwear.getPrice()).toBe(24.2);
    });
    it('Check heels price without heels and summer', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'summer', false);
        expect(footwear.getPrice()).toBe(22);
    });
    it('Check heels price with heels and winter', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'winter', true);
        expect(footwear.getPrice()).toBe(26.4);
    });
    it('Check heels price without heels and winter', () => {
        footwear = new Footwear('Boots', 'Nike', 20, 'Metal', 'Footwear', 1, 'winter', false);
        expect(footwear.getPrice()).toBe(24);
    });
    it('Check details', () => {
        expect(footwear.getDetails()).toEqual(['Розмір: 1', 'Сезон: summer', 'Чи є у взуття підбори: false']);
    })
});
