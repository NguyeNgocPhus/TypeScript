import faker from 'faker'
import {MarkerType} from './customMap'

export class Company implements MarkerType {
    name:string;
    catchPhrase:String;
    location:{
        lat:number,
        lng:number
    }
    markerContent():string{
        return this.name
    }
    constructor() {
        this.name= faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location ={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
}