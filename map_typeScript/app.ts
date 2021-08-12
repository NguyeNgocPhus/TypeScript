import {User} from './src/User'
import {Company} from './src/Company'
import {map} from './src/customMap'
import {MarkerType} from './src/customMap'

const user = new User();
const company = new Company();
const Map = new map("map");

Map.addMarker(user);
Map.addMarker(company);