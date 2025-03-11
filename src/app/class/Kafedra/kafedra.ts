
export class Kafedra{
    facultyName: string;
    kafName: string;
    pib: string;
    teacherNum: number;
    address: string;
    constructor(facultyName: string, kafName: string, pib: string, teacherNum: number, address: string){
        this.facultyName = facultyName;
        this.kafName = kafName;
        this.pib = pib;
        this.teacherNum = teacherNum;
        this.address = address;
    }
}
