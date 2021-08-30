import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T>{
    get<K extends keyof T>(key:K):T[K];
    set(value:T):void;
    getAll():T;


}
interface ApiSync<T>{
    fetch(id:number):AxiosPromise;
    save(data:T):AxiosPromise;

}
interface Event{
    on(event:string,callback:()=>void):void;
    trigger(eventName:string):void;
}
interface hashId {
    id?:number
}
export class Model<T extends hashId>{
    constructor(
        private attributes:Attributes<T>,
        private events:Event,
        private sync : ApiSync<T>
    ){}
   
    on = this.events.on;
   
    trigger= this.events.trigger;
   
    get=  this.attributes.get;
   
    set(data:T){
        this.attributes.set(data);
        this.events.trigger('change');
    }
    fetch():void{
        const id = this.attributes.get('id');

        if(typeof id != 'number'){
            throw new Error('can not fetch');
        }
        this.sync.fetch(id).then((res:AxiosResponse):void=>{
            
            this.attributes.set(res.data)
        });
    }
    save():void{
        
        this.sync.save(this.attributes.getAll()).then((data:AxiosResponse)=>{
            
            this.trigger('save')
        });
    }
}