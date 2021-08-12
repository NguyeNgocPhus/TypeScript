import { Sort } from "./Sort";

export class NumberCollection extends Sort{

    constructor(public data:number[]){
        super();
    }


    length():number{
        return this.data.length;
    }
    compare(leftIndex:number,rightIndex:number):boolean{
        return this.data[leftIndex]>this.data[rightIndex];
    }
    swap(leftIndex:number,rightIndex:number):void{
        const a = this.data[leftIndex];
        this.data[leftIndex]= this.data[rightIndex];
        this.data[rightIndex]=a;

        return;
    }
}