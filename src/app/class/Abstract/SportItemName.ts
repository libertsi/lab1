import { Dumbell } from "./Dumbbell";
import { Barbell } from "./Barbell";

export type SportItemName = 'Dumbbell' | 'Barbell';
export type SportItemNameMap = {
    [key: string]: SportItemName;
}

export const SportItemNameMap: SportItemNameMap = {
    Dumbbell: 'Dumbbell',
    Barbell: 'Barbell'
}