
class Point {
  x = 0;
  y = 0;
}

const pt = new Point();

/////
interface Pingable {
  ping(): void;
}
class Sra implements Pingable {
  ping(){
    console.log("hello");
    
  }
}
///

class aa {
  move(){
    console.log("move")
  }
}
class bb  extends aa {
  woof(time:Number){
     console.log(time);
     
  }
}
const cc = new bb;

/// exampe super
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}

////////////Member Visibility//////////////////////
class gg {
  public getName (name:String){
    console.log(name , this.getAge());
    
  }
  protected getAge(){
    return 3;
  }
}
const jj = new gg();
/////4
class MySafe {
  private secretKey = 12345;
}
const s = new MySafe(); /// wrong
//// Static
class MyClass {
  static x = 0;
  static printX(){
    console.log("hello");
    
  }
}

///// Generic Classes 
class Box<Type>{
  contents:Type;
  constructor(value:Type){
    this.contents = value
  }
}
const box = new Box<String>('hello');
////
class mmm {

  constructor(private value: string) {

  }
  get(){
    return this.value
  }

}
const acc = new mmm("ac");
console.log(acc.get());



///
class lll {
    y="string";
   private x=[1,2];
   get(){
     return this.x;
   }
}





