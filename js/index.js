

var $ = require('jQuery');
var table = require('./resources.js');

var finalBill = document.getElementById('bill');


var dishes = [
	new table.Dish("burrito", 5),
	new table.Dish("hamburger", 7),
	new table.Dish("soup", 4),
	new table.Dish("salad", 5)
];

//console.log(dishes);

var customers = [
	new table.Customer('Trey', dishes[0].name, dishes[0].cost),
	new table.Customer('Jason', dishes[2].name, dishes[2].cost),
	new table.Customer('William', dishes[1].name, dishes[1].cost),
	new table.Customer('Jacob', dishes[3].name, dishes[3].cost)
];

var $addDiner = $('#add-diner');
var $dinerInput = $('#add-diner-input');
var $addDinerBtn = $('#add-diner-btn');
var $getBillBtn = $('#get-bill');
var $dinersList = $('ul#diners');
var $bill = $('#bill-container');
var $showBill = $('#bill');

function convertToDollar(amount) {
	amount = amount.toFixed(2);
	var dollars = "$" + String(amount);
	return table.bill.getTotal(dollars);
}

$(document).ready(function() {

	$dinerInput.blur();

	$addDinerBtn.click(function() {
		var inputVal = $dinerInput.val();
		if(inputVal == ''){
			alert("Please type in a diner.");
		}
		else {
			var newDiner = "<li class='diner'>" + inputVal + "</li>";
			$dinersList.prepend(newDiner);
		}
    });

    $addDiner.keydown(function (e) {
		if (e.which == 13) {
			var inputVal = $dinerInput.val();
			if(inputVal == ''){
				alert("Please insert a diner.");
			}
			else {
				var newDiner = "<li class='diner'" + inputVal + "</li>"; 
				$dinersList.prepend(newDiner);
			}
			$dinerInput.blur();
			return false; //make sure this comes last for previous code to work	
		};
	});


	$dinerInput.focus(function() {
		$(this).val('');
	});

	$getBillBtn.click(function() {
		getDiners();
	})

	function getDiners() {
		customers.forEach(function(customer) {
			customer.getDishCost();
		})
	}
})