import { OutPutTarget } from "../Summary";

export class ConsoleLogTarget implements OutPutTarget{
    print(report:string){
        console.log(report)
    }
}