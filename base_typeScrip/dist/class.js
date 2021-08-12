"use strict";
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pt = new Point();
class Sra {
    ping() {
        console.log("hello");
    }
}
///
class aa {
    move() {
        console.log("move");
    }
}
class bb extends aa {
    woof(time) {
        console.log(time);
    }
}
const cc = new bb;
/// exampe super
class MsgError extends Error {
    constructor(m) {
        super(m);
    }
    sayHello() {
        return "hello " + this.message;
    }
}
////////////Member Visibility//////////////////////
class gg {
    getName(name) {
        console.log(name, this.getAge());
    }
    getAge() {
        return 3;
    }
}
const jj = new gg();
/////4
class MySafe {
    constructor() {
        this.secretKey = 12345;
    }
}
const s = new MySafe(); /// wrong
//// Static
class MyClass {
    static printX() {
        console.log("hello");
    }
}
MyClass.x = 0;
///// Generic Classes 
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const box = new Box('hello');
////
class mmm {
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
}
const acc = new mmm("ac");
console.log(acc.get());
///
class lll {
    constructor() {
        this.y = "string";
        this.x = [1, 2];
    }
    get() {
        return this.x;
    }
}
