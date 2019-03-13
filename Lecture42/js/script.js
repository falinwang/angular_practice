var x;
x = 5;
console.log(x); // Uncaught ReferenceError: x is not defined

if (x == undefined) {
    console.log("x is undefined");
}

x = 5;
if (x == undefined) {
    console.log("x is undefined");
}
else {
    console.log("x has been defined");
}