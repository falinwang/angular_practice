# Lecture 43
```
// First case

function orderChickenWith(sideDish) {
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
// Chicken with noodles
orderChickenWith();
// Chicken with undefined


// Second version
function orderChickenWith(sideDish) {
  if (sideDish === undefined) {
    sideDish = "whatever!";
  }
  console.log("Chicken with " + sideDish);
}
// Chicken with noodles
// Chicken with whatever!


// Third values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
```
# Boolean
### return whatever is true

`true || false;`
- true

`"" || true`
- true

`"hello" || ""`
- "hello"

## Optional Practive Quiz
1. Strict equality operator (===) differs from regular quality operator (==) in that it checks if both values on its right and left are of the same type first. If they are not, it doesn't try to coerce them to be the same value and just returns false.

Ans: True

2. Given the following Javascript code:
```
var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}
```

How many times will the word 'Hello' be printed to the console?

Ans: 2 times
