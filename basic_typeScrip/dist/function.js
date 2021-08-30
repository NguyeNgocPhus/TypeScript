"use strict";
const f1 = (x) => {
    return x;
};
console.log(f1(2));
// Biểu thức kiểu hàm 
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
///Generic Functions
function firstElement(arr) {
    return arr[0];
}
firstElement(['1', '2']);
///Inference
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
//Điều kiên của Type
function longest(a, b) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b;
    }
}
const longerArray = longest([1, 2], [1, 2, 3]);
const longerString = longest(["alice", "bob"], ['a']);
/// 
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
const a = combine([1, 2], ['3', '4']);
///Các thông số tùy chọn trong Callbacks
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], (arr, i) => {
});
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
function multiply(n, ...m) {
    return m.map((x) => n * x);
}
// 'a' gets value [10, 20, 30, 40]
const db = multiply(10, 1, 2, 3, 4);
///
function sum({ a, b, c }) {
    console.log(a + b + c);
}
sum({ a: 10, b: 3, c: 9 });
