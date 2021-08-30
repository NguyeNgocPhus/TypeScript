import axios, { AxiosPromise, AxiosResponse } from "axios";


interface hashId {
    id?:number
}

export class ApiSync<Type extends hashId>  {
    constructor(public Url:string){}
    fetch(id:number):AxiosPromise {
        return axios.get(`${this.Url}/${id}`)
        
    }
    save(data:Type):AxiosPromise{
        const id = data.id;

        if(id){
           return axios.put(`${this.Url}/${id}`,data);
        }else{
            
           return axios.post(`${this.Url}`,data);

        }
    }
}