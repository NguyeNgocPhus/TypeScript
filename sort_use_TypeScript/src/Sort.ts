

export abstract class Sort {

    abstract length():number;
    abstract swap(leftIndex:number,rightIndex:number):void;
    abstract compare(leftIndex:number,rightIndex:number):boolean;
    sort(){
        for(var i=0;i<this.length();i++){
            for(var j=0;j<this.length()-1;j++){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1);
                }
            }
        }

    }
}