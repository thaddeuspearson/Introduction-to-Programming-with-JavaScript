// What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/*
bar is logged to the console becuase the variable foo was declared in the 
global scope, then a new variable named foo was assigned in the scope of 
the brackets. SInce the console.log statement was outside the brackets,
bar is what gets logged, not qux.
*/