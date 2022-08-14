/*
Modify the age.js program you wrote in the exercises for the Input/Output chapter. 
The updated code should use a for loop to display the future ages.
*/

let getRlSync = () => require('readline-sync')
let getAge = (rlSync) => Number(rlSync.question('How old are you?\n'));
function printAge(age) {
    console.log(`You are ${age} years old.`);
    for (let i = 10; i < 50; i += 10) {
        console.log(`In ${i} years, you will be ${age + i} years old.`);
    };
}

rlSync = getRlSync();
age = getAge(rlSync);
printAge(age);