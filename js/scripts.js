// BUSINESS LOGIC

//Pizza object constructor with properties for toppings and size
var Pizza = function(size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
  this.pizzaCost = 0;
}

//Prototype method for the cost of a pizza depending on the selections chosen

Pizza.prototype.calculateCost = function() {

}

// USER INTERFACE LOGIC
$(document).ready(function(){

  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#selected-size-input").val();
    console.log(inputtedSize); // passed test
    $("#chosen-size-displayed").text(inputtedSize).val();
  }); //end submit






}); //end ready
