"use strict";
function greet(person) {
    return "Hello " + person.name;
}
function paintShape(opts) {
    // ...
}
paintShape({ shape: 1 });
paintShape({ shape: 1, xPos: 100 });
paintShape({ shape: 1, yPos: 100 });
paintShape({ shape: 1, xPos: 100, yPos: 100 });
function dosomething(obj) {
    obj.y = 1;
    // obj.x="hello"//wrong
}
let writablePerson = {
    name: "Person McPersonface",
    age: 42,
};
// works
let readonlyPerson = writablePerson;
writablePerson.age--;
console.log(readonlyPerson.age);
function aj(db) {
    console.log(db);
}
aj({ check: 1 });
