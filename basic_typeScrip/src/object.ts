interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

// thuộc tính tùy chọn

interface PaintOptions {
  shape: number;
  xPos?: number;
  yPos?: number;
}

function paintShape(opts: PaintOptions) {
  // ...
}

paintShape({ shape:1 });
paintShape({ shape:1, xPos: 100 });
paintShape({shape:1, yPos: 100 });
paintShape({ shape:1, xPos: 100, yPos: 100 });

///readonly
interface check {
    readonly x :string;
    y:number
}

function dosomething(obj:check){
    obj.y=1;
    // obj.x="hello"//wrong

}
// test
interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
    name: string;
    readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;
writablePerson.age--;

console.log(readonlyPerson.age);

////extende Object
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}
/// Biểu thức dùng chung
interface test<Type>{
    check:Type
}

function aj(db:test<number>){
    console.log(db);
    
}
aj({check:1})

