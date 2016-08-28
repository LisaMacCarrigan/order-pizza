// BUSINESS -BACK-END LOGIC
// var sizeBasePrices = [8, 10, 12, 14, 16];
// var toppingOptions = ["Bacon", "Broccoli", "Mushroom", "Onion", "Tomato", "Extra Cheese"];
// var toppings = []; //maybe push options to this array?

// A pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCost = 0; //initialize at 0
}

// A prototype method for the base cost of a pizza determined by the selected size.
Pizza.prototype.basePrice = function(selectedSize) {
  if (this.pizzaSize === "Small") {
    this.pizzaCost += 8;
  }
  else if (this.PizzaSize === "Medium") {
    this.pizzaCost += 10;
  }
  else if (this.PizzaSize === "Large") {
    this.pizzaCost += 12;
  }
  else if (this.PizzaSize === "Extra-large") {
    this.pizzaCost += 14;
  }
  else if (this.PizzaSize === "Sicilian") {
    this.pizzaCost += 16;
  }
}; //end function

// A prototype method for the cost of a pizza depending on the number of toppings chosen.
Pizza.prototype.toppingsCost = function () {
  this.pizzaCost = toppingsAmount * 0.50;
};


Pizza.prototype.totalCost = function() {

};



// USER INTERFACE - FRONT-END LOGIC


$(document).ready(function() {
    // Submit selected options
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    $("#chosen-toppings-displayed").text(""); //reset Selected Toppings

    // A customer can select one pizza size and see their selected pizza size displayed
    var inputtedSize = $("input:radio[name=size]:checked").val();
    $("#chosen-size-displayed").text(inputtedSize).val();

    // Create an array of checked toppings
    var toppingsArray = [];
    $(".toppings input[type='checkbox']:checked").each(function(){
        toppingsArray.push($(this).val());
    });
    // The number of toppings selected
    var toppingsQuantity = toppingsArray.length;
    console.log(toppingsQuantity);
    $("#chosen-toppings-displayed").append(toppingsArray).val(); // test
    console.log(toppingsArray);


    // A customer can select pizza toppings and see their selected toppings displayed
    // var inputtedToppings = $("input:checkbox[name=topping]:checked").val();
    // console.log(inputtedToppings); // passed test
    // $("#chosen-toppings-displayed").append(inputtedToppings).val();


    var newPizza = new Pizza(toppingsArray, inputtedSize);
    //Take inputtedSize value and pass into function that will determine basePrice
    newPizza.basePrice(); // REMEMBER TO PARSE FLOAT***
    console.log(newPizza.pizzaCost);
    $("#calculated-cost").text("$ " + newPizza.pizzaCost);
  }); //end submit


}); //end ready
