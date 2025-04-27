import { Outerwear } from "./Outerwear";
describe('Test Outerwear', () => {
    let outerwear: Outerwear;
    beforeEach(() => {
        outerwear = new Outerwear('Coat', 'Nike', 20, 'Metal', 'Outerwear', 1, 'summer');
    });
    it('Created accessories', () => {
        expect(outerwear).toBeTruthy();
    });
    it('Create accessories with negative price', () => {
        expect(() => new Outerwear('Coat', 'Nike', -20, 'Metal', 'Outerwear', 1, 'summer')).toThrow(new Error('Ціна не може бути менша за 0'));
    });
    it('Check price summer', () => {
        expect(outerwear.getPrice()).toBe(22);
    });
    it('Check price winter', () => {
        outerwear = new Outerwear('Coat', 'Nike', 20, 'Metal', 'Outerwear', 1, 'winter');
        expect(outerwear.getPrice()).toBe(24);
    });
    it('Check price spring', () => {
        outerwear = new Outerwear('Coat', 'Nike', 20, 'Metal', 'Outerwear', 1, 'spring');
        expect(outerwear.getPrice()).toBe(20);
    });
});