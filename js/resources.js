'use strict'

function Customer(name, dishes, bill, tip) {
	this.name = name;
	this.dishes = dishes;
	this.bill = bill;
	this.tip = tip;
}
//all these methods are just for each individual customer 

Customer.prototype.getDishCost = function() { //how many dishes each customer took
	var costForDishes = 0;
	this.bill.forEach(function(cost) { //customers[0].bill
	costForDishes += cost;
	})
	//console.log(totalForDishes)
	return this.calculateTax(costForDishes);
	
}

Customer.prototype.calculateTip = function(total) {
	var totalWithTip = (total * this.tip) + total;
	return convertToDollar(totalWithTip); 
	//console.log("with tip,", this.name, "spent", totalWithTip);
}

Customer.prototype.calculateTax = function(total) {
	var totalWithTax = (total * 0.06) + total;
	console.log("with tax, total is", totalWithTax, "for", this.name);
	return this.calculateTip(totalWithTax);

};

function Dish(name, cost) {
	this.name = name;
	this.cost = cost;
}

function Bill(customers) {
	this.customers = customers;
}


Bill.prototype.getTotal = function(total) {
//if want the name, will need to call or bind Bill with Customers
	var newLine = '\n\n';
	total += newLine;
	console.log("the total with tip and tax comes out to", total);
	return this.printReceipt(total);
}

Bill.prototype.printReceipt = function(total) {
	var text = '<h1>The total with tip and tax is ' + total +'</h1>'
	finalBill.innerHTML = text;	
};

//var bill = new Bill(customers);

//export individual functions

exports.Customer = Customer;
exports.Dish = Dish;
exports.Bill = Bill;