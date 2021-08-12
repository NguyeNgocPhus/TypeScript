// type aaaa = {
//     name:String;
//     age:Number;
//     location:String;
// };

// type PersonKey = keyof aaaa;

function check(){
    return {x:"String",y:"Number"};
}
type a = ReturnType<typeof check>


///
type b = {
    age:Number,
    name:String,
    alive:String
}

type t1 =  b[keyof b]
////
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Personn = typeof MyArray[1];
type key = "age";
type Age = Person[key];
type hi = Personn["age"]