$(function(){

var balance = 1000;

var response = prompt('Would you like to (d)eposit, (w)ithdraw or (q)uit');

if (response = 'd')
{
	var deposit = prompt('How much would you like to deposit?');
	deposit = parseInt(deposit)
	balance = deposit + balance

	console.log('You have just deposited ' + deposit);
	console.log('Your balance is now ' + balance)
}

if (response = 'w')
{
	var withdrawal = prompt('How much would you like to withdraw?');
	withdrawal = parseInt(withdrawal)

	console.log('You have just withdrawn ' + withdrawal);
	balance = balance - withdrawal
	console.log('Your balance is now ' + (balance);
}

while response != 'q' {
	response
}

if (response = 'q') {
	console.log('Your final balance is' + balance);
}
	


});