
/************************************************************************
Assignment 1:

I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part of this assignment has been copied manually or electronically from any other source
(including web sites) or distributed to other students.
Name: Azad Zeynalov
Student ID: 112217229
Date: 22.05.2023
***********************************************************************/


/***************************** Task1 *************************/

function playNumbers(){
    var done = 0;
    var sum = 0;
    var average = 0;
    var largest = 0;
    var i;
    if(arguments.length == 0){
        console.log("There are no inputs");
        done = 1;
    }
    else{
        for(i = 0; i < arguments.length; i++){
            if(typeof arguments[i] != 'number'){
                console.log(`${arguments[i]} is not a number`);
                done = 1;
            }
            else{
                if(i == 0){
                    largest = arguments[i]; 
                }
                else if(arguments[i] > largest){
                    largest = arguments[i];
                }
            }
            sum += arguments[i];
        }
    }
    if(done === 0){
        console.log(`The largest number of (${Array.from(arguments).join(", ")}) is ${largest}`);
        average = sum / i;
        console.log(`The average of (${Array.from(arguments).join(", ")}) is ${average}`);
    } 
}

console.log("/***************************** Task1 *************************/");
playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9,3,6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we");

/***************************** Task2 *************************/

var convertCF = function(val,cf){
    var done = 0;
    var celsius = 0;
    var fahrenheit = 0;
    if(typeof val != 'number'){
        console.log("I need a number.");
        done = 1;
    }
    else if((cf != 'c' && cf != 'C') && (cf != 'f' && cf != 'F')){
        console.log("I am confused :(");
        done = 1;
    }
    else{
        if(cf == 'c' || cf == 'C'){
            fahrenheit = (val * 1.8) + 32;
            console.log(`${val}C is equivalent to ${fahrenheit}F`);
        }
        else if(cf == 'f' || cf == 'F'){
            celsius = (val - 32) / 1.8;
            console.log(`${val}F is equivalent to ${celsius}C`);
        }  
    }
}

console.log("/***************************** Task2 *************************/");
convertCF("avc", "F");
convertCF(32, "M"); //the first argument in the original tester was presented as a string: convertCF("32", "M")
convertCF(32, 'F');
convertCF(0, "C");
convertCF(122, "F");


