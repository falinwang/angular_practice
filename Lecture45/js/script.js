// Object creation
var company = new Object();
company.name = "Facebook";
console.log(company);

company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
// >>> Uncaught TypeError: Cannot set property 'firstName' of undefined
// var a;
// a.hello = "hello"; // >>> Uncaught TypeError: Cannot set property 'hello' of undefined

console.log("Company CEO name is: " + company.ceo.firstName);
// >>> Company CEO name is: Mark

console.log(company["name"]);
// >>> Facebook

company.$stock = 110;
console.log(company);

company["stock of company"] = 120;
console.log(company);
console.log("Stock price is: " + company["stock of company"]);

var stockPropName = "stock of Facebook";
company[stockPropName] = 130;
console.log("Stock price is: " + company[stockPropName]);

// ------------Part 2-----------
// Better way: object literal
var instagram = {
  name: "Instagram",
  ceo: {
    firstName: "Adam",
    favColor: "Purple",
  },
  // $stock: 110,
  "stock of company": 110
};

console.log(instagram);
console.log(instagram.ceo.firstName);
