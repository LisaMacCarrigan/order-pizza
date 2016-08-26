// BUSINESS -BACK-END LOGIC
var sizeBasePrices = [8, 10, 12, 14, 16];

// A pizza object constructor with properties for toppings and size.
function Pizza (toppings, size) {
  this.pizzaToppings = [];
  this.pizzaSize = size;
  this.pizzaCost = size; //either set to size, or initialize at 0
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

    // var newPizza = new Pizza(inputtedToppings, inputtedSize);
    // var inputtedToppings = [];

    // A customer can select one pizza size and see their selected pizza size displayed
    var inputtedSize = $("option[value]").val();
    console.log(inputtedSize);
    var inputtedSizeDetail = $("#selected-size-input").val();
    console.log(inputtedSizeDetail); // passed test
    $("#chosen-size-displayed").text(inputtedSizeDetail).val();


    //take inputtedSize and pass into function that will determine basePrice




  }); //end submit

}); //end ready
