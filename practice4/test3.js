// Declaration:
// I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from anybody else or distributed to other students.
// Name: Azad Zeynalov
// Student ID: 112217229


var customers = [

    person1 = 
    {
        name: "Faris Burch",
        item: "bread",
        num: 2,
        price: 2.99,
        taxable: false
    },

    {
        name: "Julius Cross",
        item: "shirt",
        num: 1,
        price: 30.95,
        taxable: true
    },

    {
        name: "Julius Cross",
        item: "pen",
        num: 10,
        price: 2.5,
        taxable: true
    },

    {
        name: "Roy Macias",
        item: "egg",
        num: 2,
        price: 2.99,
        taxable: false
    }
];

function getTotal(customer){
    var total = 0;
    var tax;
    var amountToPay = customer.num * customer.price;
    if(customer.taxable){
        tax = amountToPay * 0.13
        total += amountToPay + tax;
    }
    else{
        total += amountToPay;
    }
    return total;
}

function printInfo(customer){
        console.log(`${customer.name} purchased ${customer.num} ${customer.item}(s) at the price of $${customer.price}`);
        console.log(`${customer.name} spent ${getTotal(customer).toFixed(2)} is total`);
}

function store(){
    var storeSales = 0;
    var storeProfit = 0;
    console.log("==== Azad's Store ====");
    for(var i = 0; i < customers.length; i++){
        printInfo(customers[i]);
        console.log("\n");
    }
    for(var i = 0; i < customers.length; i++){
        storeSales += getTotal(customers[i]);
    }
    console.log(`Store sales: $${storeSales.toFixed(2)}`);
}

console.log(store());




