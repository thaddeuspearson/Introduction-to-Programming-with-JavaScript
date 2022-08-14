/*
 Write a function that logs whether a number is between 0 and 50 (inclusive), 
between 51 and 100 (inclusive), greater than 100, or less than 0.
*/

function numberRange(num) {
    let message = `${num} is `;
    if (num < 0) {
        message += "less than 0";
    } else if (num < 51) {
        message += "between 0 and 50";
    } else if (num < 101) {
        message += "between 51 and 100";
    } else {
        message += "greater than 100";
    };
    console.log(message);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);