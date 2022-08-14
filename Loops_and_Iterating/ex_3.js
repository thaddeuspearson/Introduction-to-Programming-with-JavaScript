// The following code causes an infinite loop (a loop that never stops iterating). Why?


let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
A while(true) loop is infinite. The assignment of counter to 1 in the context of the
conditional check of the while loop evalutates to true. As the loop executes, and counter is
incremented to 2, the if statement is not triggered as counter equals 2 and is not greater than 2.
The loop restarts, reassigns counter back to 1, and this goes on infinately.
*/