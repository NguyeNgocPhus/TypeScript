import { Sort } from "./Sort";

export class StringCollection extends Sort{

    constructor(public data:String){
        super();
    }


    length():number{
        return this.data.length;
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex].toLocaleLowerCase()>this.data[rightIndex].toLocaleLowerCase();
    }
    swap(leftIndex:number,rightIndex:number):void{
        
        const valString = this.data.split('');
        const a = valString[leftIndex];
        valString[leftIndex]=valString[rightIndex];
        valString[rightIndex]=a;

        this.data = valString.join('');



        return;
    }
}