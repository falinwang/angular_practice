var message = "in global"
console.log("global: message = " + message);
// global: message = in global

var a = function () {
    var message = "inside a";
    console.log("a: message = " + message);
    // a: message = inside a

    function b () {
        console.log("b: message = " + message);
    }
    // b: message = inside b


    b();
}

function b () {
    console.log("b: message = " + message);
}
// b: message = in global

a();