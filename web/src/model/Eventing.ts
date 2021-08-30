type CallBack = () => void;

export class Eventing {
    events : {[key:string]:CallBack[]} = {};
    on = (evenName:string,callback:CallBack)=>{
        
        const handlers = this.events[evenName] || [];
        handlers.push(callback);
        this.events[evenName] = handlers;
    }
    trigger=(eventName:string):void=>{
        const handlers = this.events[eventName];

        handlers.forEach(callback=>{
            callback();
        })
    }
}