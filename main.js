// Write your JavaScript here
function calculateChange(amountDue, amountReceived) {

    var amountDue = parseFloat(document.getElementById('amount-due').value);
    var amountReceived = parseFloat(document.getElementById('amount-received').value);


    var cents = parseFloat(amountReceived - amountDue) * 100;
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    var pennies = 0;

    if (cents > 100) {
        var dollars = Math.floor(cents / 100);
        cents %= 100;
        document.getElementById('dollars-output').innerHTML = dollars;
    }
    else {
        document.getElementById('dollars-output').innerHTML = 0;
    }

    if (cents > 24) {
        var quarters = Math.floor(cents / 25);
        cents %= 25;
        document.getElementById('quarters-output').innerHTML = quarters;
    }
    else {
        document.getElementById('quarters-output').innerHTML = 0;
    }

    if (cents > 9) {
        var dimes = Math.floor(cents / 10);
        cents %= 10;
        document.getElementById('dimes-output').innerHTML = dimes;
    } 
    else {
        document.getElementById('dimes-output').innerHTML = 0;
    }

    if (cents > 4) {
        var nickels = Math.floor(cents / 5);
        cents %= 5;
        document.getElementById('nickels-output').innerHTML = nickels;
    }
    else {
        document.getElementById('nickels-output').innerHTML = 0;
    }
    if (cents > 0) {
        document.getElementById('pennies-output').innerHTML = Math.round(cents);
    }
    else {
        document.getElementById('pennies-output').innerHTML = 0;
    }

}

document.getElementById('calculate-change').addEventListener('click', calculateChange);