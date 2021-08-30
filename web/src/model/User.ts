import { Model } from "./Model"
import { ApiSync } from "./ApiSync"
import { Attributes } from "./Attributes"
import { Eventing } from "./Eventing"
import { Collection } from "./Collection"



export interface UserProps{
    id?:number,
    name?:string;
    age?:number;
}
const url = 'http://localhost:3000/User'
export class User extends Model<UserProps>{
    static buildUser(attr:UserProps):User{
        return new User(
            new Attributes<UserProps>(attr),
            new Eventing(),
            new ApiSync<UserProps>(url)

        )
    }
    static buildCollection():Collection<User,UserProps>{
        return new Collection<User,UserProps>(url,(json:UserProps)=>User.buildUser(json));
    }
  

   
    
}