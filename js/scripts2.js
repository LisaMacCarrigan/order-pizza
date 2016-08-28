// BUSINESS -BACK-END LOGIC
var sizeBasePrices = [8, 10, 12, 14, 16];
var toppingOptions = ["Bacon", "Broccoli", "Mushroom", "Onion", "Tomato", "Extra Cheese"];
var toppings = []; //maybe push options to this array?

// A pizza object constructor with properties for toppings and size.
function Pizza (toppings, size) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCost = 0; //either set to size, or initialize at 0
}

// A prototype method for the cost of a pizza depending on the selections chosen.
// Pizza.prototype.toppingsCount


// Pizza.prototype.basePrice = function(size) {
//   if (size )
// }



// USER INTERFACE - FRONT-END LOGIC


$(document).ready(function() {
  $("#pizza-order").submit(function(event) {
    event.preventDefault();
    $("#chosen-toppings-displayed").text("");


    // A customer can select one pizza size and see their selected pizza size displayed
    var inputtedSize = $("input:radio[name=size]:checked").val();
    console.log(inputtedSize); // passed test
    $("#chosen-size-displayed").text(inputtedSize).val();

    //take inputtedSize and pass into function that will determine basePrice

    // A customer can select pizza toppings and see their selected toppings displayed
    var inputtedToppings = $("input:checkbox[name=topping]:checked").val();
    console.log(inputtedToppings); // passed test
    $("#chosen-toppings-displayed").append(inputtedToppings).val();



  }); //end submit

}); //end ready
