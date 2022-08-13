// What does the following code log to the console?

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
  }
  
  scream('Yipeee');

  // logs nothing to the console, as the console.log statement occurs after the return statement.