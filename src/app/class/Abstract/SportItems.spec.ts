import { SportItems } from "./SportItems";
import { Javelin } from "./Javelin";
describe('SportItems', () => {
     let javelin = new Javelin("Javelin", 2, "metal", 3);

    beforeEach(() => {
        let javelin = new Javelin("Javelin", 12, "metal", 3);
    });

    it('should create an instance of SportItems', () => {
        expect(javelin).toBeTruthy();
    });

    it('should return correct info from displayInfo', () => {
        expect(javelin.displayInfo()).toBe('Name= Javelin Weight= 2 material= metal ');
    });

    it('should return correct weight from calcWeight', () => {
        expect(javelin.calcWeight()).toBe(2);
    });

});

