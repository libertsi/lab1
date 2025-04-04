import { Dumbell } from "./Dumbbell";
import { Barbell } from "./Barbell";
import { SportItemName, SportItemNameMap } from "./SportItemName";
import { SportItems } from "./SportItems";

export class SportItemFactory{
    public static getSportItem(name: string, weight: number, material: string, parameter: any ): SportItems{
        if(name == SportItemNameMap['Dumbbell']) return new Dumbell(name, weight, material, parameter);
        else if(name == (SportItemNameMap['Barbell'])) return new Barbell(name, weight, material, parameter);
        else throw new Error('Немає такого спортивного предмету ' + name)
    }
}