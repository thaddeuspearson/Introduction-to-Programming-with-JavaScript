/*
What does this code log to the console? 
Does executing the foo function affect the output? Why or why not?
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* This will log 1 to the console. On line 11, bar is reassigned to the value 2,
but that execution is removed from the stack, and the console.log statement on line 12
will reference the variable declared on line 6 instead. */