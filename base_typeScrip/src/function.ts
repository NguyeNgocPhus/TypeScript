// funciton co bản
type voidFunc = (a:number) => number;

const f1 :voidFunc = (x:number)=>{
  return x
}
console.log(f1(2))



// Biểu thức kiểu hàm 
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}


///Generic Functions

function firstElement<lol>(arr: lol[]):lol{
  return arr[0];
}
firstElement(['1','2'])

///Inference


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


//Điều kiên của Type

function longest<Type>(a: Type[], b: Type[]) {
  
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest<number>([1, 2], [1, 2, 3]);
const longerString = longest<string>(["alice", "bob"],['a']);
/// 
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const a = combine<string|number>([1,2],['3','4']);

///Các thông số tùy chọn trong Callbacks
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}
myForEach([1,2,3],(arr,i)=>{ 
})

//this
const user = {
  id: 123,

  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
user.becomeAdmin();

//Tham số còn lại và đối số
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const db = multiply(10, 1, 2, 3, 4);


///
function sum({ a, b, c } :{a:number,b:number,c:number}) {
  console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });



