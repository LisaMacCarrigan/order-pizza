// BUSINESS -BACK-END LOGIC
// var sizeBasePrices = [8, 10, 12, 14, 16];


// A pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.pizzaToppings = toppings; //or empy array?
  this.pizzaSize = size;
  this.pizzaCost = 0; //initialize at 0
}

Pizza.prototype.listToppings = function(toppings) {
  for (var index = 0; index <= toppings.length; index++);
    return
}


// A prototype method for the base cost of a pizza determined by the selected size.
Pizza.prototype.basePrice = function(size) {
  if (this.pizzaSize === "Small") {
    this.pizzaCost += 8;
  }
  else if (this.pizzaSize === "Medium") {
    this.pizzaCost += 10;
  }
  else if (this.pizzaSize === "Large") {
    this.pizzaCost += 12;
  }
  else if (this.pizzaSize === "Extra-large") {
    this.pizzaCost += 14;
  }
  else if (this.pizzaSize === "Sicilian") {
    this.pizzaCost += 16;
  }
}; //end function

// A prototype method for the cost of a pizza depending on the number of toppings chosen.
Pizza.prototype.toppingsCost = function () {
  this.pizzaCost += this.pizzaToppings * 0.50;
};


// Pizza.prototype.totalCost = function() {
//
// };




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


    $("#chosen-toppings-displayed").append(toppingsArray).val(); // test
    console.log(toppingsArray);

    // The number of toppings selected
    var toppingsQuantity = toppingsArray.length;


    // A customer can select pizza toppings and see their selected toppings displayed
    // var inputtedToppings = $("input:checkbox[name=topping]:checked").val();

    var newPizza = new Pizza(toppingsArray, inputtedSize);
    //Take inputtedSize value and pass into function that will determine basePrice
    newPizza.basePrice(); // REMEMBER TO PARSE FLOAT***
    console.log(newPizza.pizzaCost);
    $("#calculated-cost").text("$ " + newPizza.pizzaCost);
  }); //end submit


}); //end ready
