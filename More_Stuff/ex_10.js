/*
Consider this code:

let x = "5"
x = x + 1 // "51"

Now, consider this code:

let y = "5"
y++

What gets returned by y++ in the second snippet, and why?
*/

// 5 is returned. Type coercion occurs, but the incrementation happens after y is returned