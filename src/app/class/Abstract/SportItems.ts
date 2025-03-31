export abstract class SportItems{
    name: string = '';
    weight: number = 1;
    material: string = '';


    constructor(name: string, weight: number, material: string){
        if(weight <= 0) throw new Error('вага не може бути менша за 0');

        this.name = name;
        this.weight = weight;
        this.material = material;
    }
    displayInfo(){
        return(
            'Name= ' + this.name + ' ' +
            'Weight= ' + this.weight + ' ' +
            'material= ' + this.material + ' '
        )
    }
    getWeight(){
        return (
            'Weight= ' + this.weight
        )
    }
}