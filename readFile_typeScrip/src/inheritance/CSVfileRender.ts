import fs from 'fs'

export abstract class CSVfileRender <Type>{
    data:Type[]= [];
    constructor(public filename :string){

    }
    abstract mapRow(row: string[]): Type;
    read():void{
        this.data = fs.readFileSync(this.filename,{
            encoding:'utf-8'
        }).split('\n').map((val)=>{
            return val.split(',')
        }).map(this.mapRow);

    }
}