import { Accessories } from "./Accessories";
describe('Test Accessories', () => {
    let accessories: Accessories;
    beforeEach(() => {
        accessories = new Accessories('Braslet', 'Nike', 20, 'Metal', 'Accessories', 'hand');
    });
    it('Created accessories', () => {
        expect(accessories).toBeTruthy();
    });
    it('Create accessories with negative price', () => {
        expect(() => new Accessories('Braslet', 'Nike', -20, 'Metal', 'Accessories', 'hand')).toThrow(new Error('Ціна не може бути менша за 0'));
    });
    it('Check price hand', () => {
        expect(accessories.getPrice()).toBe(40);
    });
    it('Check price leg', () => {
        accessories = new Accessories('Braslet', 'Nike', 20, 'Metal', 'Accessories', 'leg');
        expect(accessories.getPrice()).toBe(10);
    });
    it('Check details', () => {
        expect(accessories.getDetails()).toEqual(['Частина тіла: hand']);
    })
    it('Check body part', () => {
        accessories = new Accessories('Braslet', 'Nike', 20, 'Metal', 'Accessories', 'leg');
        expect(accessories.getBodyPart()).toBe('leg');
    });
});