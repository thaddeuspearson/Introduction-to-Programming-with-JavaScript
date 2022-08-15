// Write some code to replace the value 6 in the following array with 606

let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

arr = arr.map(arr => arr.map(elem => elem === 6 ? 606 : elem));

console.log(arr);