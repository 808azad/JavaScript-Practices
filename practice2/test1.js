// Declaration:
// I declare that this test is my own work in accordance with Seneca Academic Policy. 
//No part of this assignment has been copied manually or electronically from anybody else or distributed to other students.

// Name: Azad Zeynalov
// Student ID: 112217229


function calcPay(number,price,province,discount){
    var tax = 0;
    var done = 0;
    var total = 0;
    var finalPayment = 0;
    var totalFinalWithDisc = 0;
    if(province == 'Ontario'){
        tax = 0.13;
    }
    else if(province == 'Quebec'){
        tax = 0.15;
    } 
    else{
        tax = 0.20;
    }
    if(discount < 0 || discount > 100){
        console.log("===== Azad's Shop =====");
        console.log("Discount error. Program terminates");
        done = 1;
    }
    else{
         total = (number * price);
         if(typeof discount === 'undefined'){
            finalPayment = total + (total * tax);
            console.log("===== Azad's Shop =====");
            console.log(`You need to pay ${finalPayment.toFixed(2)}$`);
            console.log(`When you buy ${number} items at the price of ${price}$ in ${province} at the reqular price`);
         }
         else{
            finalPayment = total - (total * (discount / 100));
            totalFinalWithDisc = finalPayment + (finalPayment * tax);
            console.log("===== Azad's Shop =====");
            console.log(`You need to pay ${totalFinalWithDisc.toFixed(2)}$`);
            console.log(`When you buy ${number} items at the price of ${price}$ in ${province} with discount of ${discount}%`);
         }
    }
    return done;
}
calcPay(2,20,"Ontario",30);
calcPay(2,20,"Quebec");
calcPay(2, 20, "Alberta");
calcPay(2, 20, "ABC", 300);
