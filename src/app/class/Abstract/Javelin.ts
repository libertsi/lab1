import { SportItems } from "./SportItems";
export class Javelin extends SportItems{
    length: number;
    constructor( override name: string, override weight: number, material: string, length: number){
        super(name, weight, material);
        if(length < 0 ) throw new Error('довжина не може бути менша за 0');
        this.length = length;
    }
}