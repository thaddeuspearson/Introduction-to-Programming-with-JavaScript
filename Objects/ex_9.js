// What does the following program log to the console? Why?

let foo = {
    a: 'hello',
    b: 'world',
};
  
let qux = 'hello';

function bar(argument1, argument2) {
argument1.a = 'hi';
argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);   // this logs hi
console.log(qux);     // this logs hello

/*
string literals are primitive types and cannot be reassigned. 
The param argument2 gets reassigned to hi in the context of the bar func,
but the qux variable still maintains 'hello' in the global scope
*/

