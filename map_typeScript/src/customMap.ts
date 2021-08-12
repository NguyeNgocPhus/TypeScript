import {User} from './User'
import { Company } from './Company';


export interface MarkerType{
    location:{
        lat:number,
        lng:number
    },
    markerContent():string
}
export class map {
    private googleMap: google.maps.Map ;
    constructor(divId:string){
        this.googleMap =new google.maps.Map(document.getElementById(divId)!,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }

    addMarker(marker:MarkerType){
        
        const map = new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:marker.location.lat,
                lng:marker.location.lng
            }
        })

        const infowindow = new google.maps.InfoWindow({
            content: marker.markerContent()
        })
        map.addListener("click", () => {
            infowindow.open({
                anchor: map,
                map:this.googleMap,
                shouldFocus: false,
            });
        });
    }

}

