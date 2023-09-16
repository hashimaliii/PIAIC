let car = 'subaru';

console.log(car == 'subaru'?" I predict True": "I predict False.")

// Tests that evaluate to true
const test1: boolean = 5 + 5 === 10;
const test2: boolean = "hello" === "hello";
const test3: boolean = [1, 2, 3].length === 3;
const test4: boolean = { name: "Alice", age: 30 }.age === 30;
const test5: boolean = (2 * 3) > 5;

// Tests that evaluate to false
const test6: boolean = 7 < 5;
const test7: boolean = "world" != "world";
const test8: boolean = 5 > 7;
const test9: boolean = { name: "Bob", age: 25 }.age > 30;
const test10: boolean = (5 - 1) === 3;

console.log("Test 1:", test1);
console.log("Test 2:", test2);
console.log("Test 3:", test3);
console.log("Test 4:", test4);
console.log("Test 5:", test5);
console.log("Test 6:", test6);
console.log("Test 7:", test7);
console.log("Test 8:", test8);
console.log("Test 9:", test9);
console.log("Test 10:", test10);