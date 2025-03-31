import { SportItems } from "./SportItems";
export class Dumbell extends SportItems{
    isAdjustable: boolean;
    constructor( override name: string, override weight: number, material: string, isAdjustable: boolean){
        super(name, weight, material);
        this.isAdjustable = isAdjustable;
    }
}