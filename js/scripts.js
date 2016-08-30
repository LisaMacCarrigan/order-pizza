// BUSINESS -BACK-END LOGIC
// A pizza object constructor with properties for toppings and size.
function Pizza(toppings, size) {
  this.pizzaToppings = toppings; //or empy array?
  this.pizzaSize = size;
  this.pizzaCost = 0; //initialize at 0
}

// A prototype method that calculates the total cost of the pizza based on the size and the number of toppings.
Pizza.prototype.totalCost = function() {
  if (this.pizzaSize === "Small") {
    this.pizzaCost += 8 + (this.pizzaToppings.length * 0.75);
  }
  else if (this.pizzaSize === "Medium") {
    this.pizzaCost += 10 + (this.pizzaToppings.length * 0.75);
  }
  else if (this.pizzaSize === "Large") {
    this.pizzaCost += 12 + (this.pizzaToppings.length * 0.75);
  }
  else if (this.pizzaSize === "Extra-large") {
    this.pizzaCost += 14 + (this.pizzaToppings.length * 0.75);
  }
  else if (this.pizzaSize === "Sicilian") {
    this.pizzaCost += 16 + (this.pizzaToppings.length * 0.75);
  }
}; //end function

// USER INTERFACE - FRONT-END LOGIC

$(document).ready(function() {
    // Submit selected options
  $("#pizza-order").submit(function(event) {
    event.preventDefault();

    $("button#input-order").text("Update Order");
    $("#chosen-toppings-displayed").text(""); //reset Selected Toppings

    // A customer can select one pizza size and see their selected pizza size displayed
    var inputtedSize = $("input:radio[name=size]:checked").val();
    $("#chosen-size-displayed").text(inputtedSize).val();

    // Create an array of checked toppings
    var toppingsArray = [];
    $(".toppings input[type='checkbox']:checked").each(function() {
        toppingsArray.push($(this).val());
    });
    $("#chosen-toppings-displayed").append(toppingsArray.join(', ')).val();

    // The number of toppings selected
    var toppingsQuantity = toppingsArray.length;

    var newPizza = new Pizza(toppingsArray, inputtedSize);
    //Take inputtedSize value and pass into function that will determine basePrice
    newPizza.totalCost(); // REMEMBER TO PARSE FLOAT***

    var cost = parseFloat(newPizza.pizzaCost).toFixed(2);
    $("#calculated-cost").text("$ " + cost);

  }); //end submit

  $("#reset-order").click(function() {
    $("button#input-order").text("Add to Order");
    $("#chosen-size-displayed").text("");
    $("#chosen-toppings-displayed").text("");
    $("#calculated-cost").text("");
  });

  $("#submit-order").click(function() {
    $(".col-sm-8").fadeOut("slow");
    $(".col-sm-4").fadeOut("slow");
  });



}); //end ready
