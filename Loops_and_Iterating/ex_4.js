// Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
    console.log(i += 1);
  }

/* 
No error will occur. i is incremented within the context of the console.log statement,
and when i becomes greater than 5, the for loop terminates.
*/