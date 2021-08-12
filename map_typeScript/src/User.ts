import faker from 'faker'
import {MarkerType} from './customMap'

export class User implements MarkerType{
    name:string;
    location:{
        lat:number,
        lng:number
    }
    markerContent():string{
        return this.name;
    }
    constructor() {
        this.name= faker.name.findName();
        this.location ={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
}