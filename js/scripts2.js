// BUSINESS -BACK-END LOGIC
// var sizeBasePrices = [8, 10, 12, 14, 16];
// var toppingOptions = ["Bacon", "Broccoli", "Mushroom", "Onion", "Tomato", "Extra Cheese"];
// var toppings = []; //maybe push options to this array?

// A pizza object constructor with properties for toppings and size.
function Pizza (toppings, size) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCost = 0; //initialize at 0
}

// A prototype method for the cost of a pizza depending on the number of toppings chosen.
Pizza.prototype.toppingsCost = function (toppingsAmount) {
  this.pizzaCost = toppingsAmount * 0.50;
};

Pizza.prototype.basePrice = function(selectedSize) {
  if (this.pizzaSize === "Small") {
    this.pizzaCost += 8.00;
  }
  else if (this.PizzaSize === "Medium") {
    this.pizzaCost += 10.00;
  }
  else if (this.PizzaSize === "Large") {
    this.pizzaCost += 12.00;
  }
  else if (this.PizzaSize === "Extra-large") {
    this.pizzaCost += 14.00;
  }
  else {
    this.pizzaCost += 16.00;
  }
};

Pizza.prototype.totalCost = function() {

};



// USER INTERFACE - FRONT-END LOGIC


$(document).ready(function() {
    // Submit selected options
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    $("#chosen-toppings-displayed").text(""); //reset Selected Toppings
    $("#calculated-cost").text(""); //reset Order Total

    // A customer can select one pizza size and see their selected pizza size displayed
    var inputtedSize = $("input:radio[name=size]:checked").val();
    $("#chosen-size-displayed").text(inputtedSize).val();

    // A customer can select pizza toppings and see their selected toppings displayed
    var inputtedToppings = $("input:checkbox[name=topping]:checked").val();
    console.log(inputtedToppings); // passed test
    $("#chosen-toppings-displayed").append(inputtedToppings).val();

    // The number of toppings selected
    var toppingsQuantity = $("input[name='topping']:checked").length;
    console.log(toppingsQuantity);

    // Create an array of checked Toppings
    // $("input:checkbox[name=topping]:checked").each(function(){
    //     toppingsArray.push($(this).val());
    // });
    var newPizza = new Pizza(inputtedToppings, inputtedSize);
    //Take inputtedSize value and pass into function that will determine basePrice
    newPizza.basePrice(); // REMEMBER TO PARSE FLOAT***
    console.log(newPizza.pizzaCost);
    $("#calculated-cost").text("$ " + newPizza.pizzaCost);

  }); //end submit

}); //end ready
