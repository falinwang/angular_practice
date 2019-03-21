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
