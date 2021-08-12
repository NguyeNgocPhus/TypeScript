
import { Sort } from "./Sort";
import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";
// const arrayNumber = new NumberCollection([3,2,1,100]);
// arrayNumber.sort();
// console.log(arrayNumber.data);

// const string = new StringCollection("hellllllllloa");
// string.sort();
// console.log(string.data);

const list  = new LinkedList();
list.add(1);
list.add(-1);
list.add(-100);

list.sort();
list.print();

