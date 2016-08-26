// BUSINESS LOGIC
var toppingOptions = ["Bacon", "Broccoli", "Mushroom", "Onion", "Tomato", "Extra Cheese"];
var sizeBasePrices = [8, 10, 12, 14, 16];
var toppings = [];

//Pizza object constructor with parameters for toppings and size and three properties
function Pizza (toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.pizzaCost = size;
}

//Prototype method for the cost of a pizza depending on the selections chosen
Pizza.prototype.costCalc = function(sizeCost, toppingsCost) {
  this.pizzaCost += sizeCost + toppingsCost;
}

Pizza.prototype.addPizzaTopping = function(toppings) {
  this.pizzaToppings.push(toppings);
}

//Determine the number of toppings selected
var toppingCount = function(topping) {
  var toppingArray = [];

  for (var i = 0; i <= toppingArray.length; i++) {
    toppingArray.push(i);
  }
};
// USER INTERFACE LOGIC


$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    var userToppings = [];

    userToppings = $("input[name=topping]:checked").each(function(toppingCount) {
      userToppings.push($(this)val());
    });
    console.log(userToppings);

    $("#chosen-toppings-displayed").text("");
    $("#chosen-toppings-displayed").append("<li><span>" + userToppings + "</span></li>");

    // A customer can select one pizza size and see their selected pizza size displayed.
    var inputtedSize = $("#selected-size-input").val();
    console.log(inputtedSize); // passed test
    $("#chosen-size-displayed").text(inputtedSize).val();

    var aPizza = new Pizza (userToppings, inputtedSize);
    console.log(aPizza);


    // Display Total Order cost
    $("#calculated-cost").text("$ " + aPizza.pizzaCost);
    });
  }); //end submit

  $("#submit-order").click(function) {
    alert("Thank you for your order");
    //show summary of order or something similar
  };

}); //end ready
