// What does the following function do?

function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length);
}

/* 
This function spits a string on spaces, reverses the words, and then returns a 
new array containing the integer representation of the length of the string.
*/