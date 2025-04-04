import { SportItems } from "./SportItems";
export class Javelin extends SportItems{
    length: number;
    constructor( override name: string, override weight: number, material: string, length: number){
        super(name, weight, material);
        this.length = length;
    }
}