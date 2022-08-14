// What values do the following expressions evaluate to?

console.log(false || (true && false));   // false
console.log(true || (1 + 2));    // true
console.log((1 + 2) || true);    // 3
console.log(true && (1 + 2));    // 3
console.log(false && (1 + 2));   // false
console.log((1 + 2) && true);    // true
console.log((32 * 4) >= 129);    // false
console.log(false !== !true);    // false
console.log(true === 4);     // false
console.log(false === (847 === '847'));  // true
console.log(false === (847 == '847'));   // false
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);  // true