
import { User,UserProps } from "./model/User";
import { Collection } from "./model/Collection";
const user = User.buildCollection();

user.fetch();
console.log(user.model);







