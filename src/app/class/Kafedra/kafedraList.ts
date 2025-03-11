import { Kafedra } from './kafedra';

export class kafedraList{
    kafedras: Kafedra[] = [];
    addKafedra(b: Kafedra){
        this.kafedras.push(b);
    }
    sort(){
        this.kafedras = this.kafedras.sort((a, b) => a.teacherNum - b.teacherNum);
    }
}