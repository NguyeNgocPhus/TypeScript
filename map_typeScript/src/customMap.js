"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var map = /** @class */ (function () {
    function map(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    map.prototype.addMarker = function (marker) {
        var _this = this;
        var map = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: marker.location.lat,
                lng: marker.location.lng
            }
        });
        var infowindow = new google.maps.InfoWindow({
            content: marker.markerContent()
        });
        map.addListener("click", function () {
            infowindow.open({
                anchor: map,
                map: _this.googleMap,
                shouldFocus: false,
            });
        });
    };
    return map;
}());
exports.map = map;
