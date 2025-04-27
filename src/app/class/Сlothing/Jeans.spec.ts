import { Jeans } from "./Jeans";
describe('Test Jeans', () => {
    let jeans: Jeans;
    beforeEach(() => {
        jeans = new Jeans('Jeans', 'Nike', 20, 'Cotton', 'Jeans', 42, 'summer', false);
    });
    it('Created jeans', () => {
        expect(jeans).toBeTruthy();
    });
    it('Create jeans with negative price', () => {
        expect(() => new Jeans('Jeans', 'Nike', -20, 'Cotton', 'Jeans', 1, 'summer', false)).toThrow(new Error('Ціна не може бути менша за 0'));
    });
    it('Check price summer', () => {
        expect(jeans.getPrice()).toBe(22);
    });
    it('Check price winter', () => {
        jeans = new Jeans('Jeans', 'Nike', 20, 'Metal', 'Jeans', 1, 'winter', false);
        expect(jeans.getPrice()).toBe(24);
    });
    it('Check price spring', () => {
        jeans = new Jeans('Jeans', 'Nike', 20, 'Metal', 'Jeans', 1, 'spring', false);
        expect(jeans.getPrice()).toBe(20);
    });
    it('Check price with belt', () => {
        jeans = new Jeans('Jeans', 'Nike', 20, 'Metal', 'Jeans', 1, 'summer', true);
        expect(jeans.getPrice()).toBe(44);
    });
    it('Check price without belt', () => {
        jeans = new Jeans('Jeans', 'Nike', 20, 'Metal', 'Jeans', 1, 'summer', false);
        expect(jeans.getPrice()).toBe(22);
    });
});
