/*
How many primitive values are there in the following expression? 
Identify them. How many objects are there in the expression? Identify those objects.
*/
[1, 2, ["a", ["b", false]], null, {}]

/*
primitive values -> 1, 2, "a", "b", false, null
objects -> [1, 2, ["a", ["b", false]], null, {}],
           ["a", ["b", false]],
           ["b", false],
           {}
*/