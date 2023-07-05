// Declaration:
// I declare that this test is my own work in accordance with Seneca Academic Policy. No part of this assignment has been copied manually or electronically from anybody else or distributed to other students.
// Name: Azad Zeynalov
// Student ID: 112217229


function isPalindrome(str){
    done = false;
    if(typeof str !== 'string'){
        console.log("Your input is not string!");
        done = false;
    } 
    else if((str[0] < 'a' || str[0] > 'z') && (str[0] < 'A' || str[0] > 'Z')){
        console.log("Your input must be a character string!");
        done = false;
    }
    else{
        var alphaString = '';
        for(var i = 0; i < str.length; i++){
            var char = str[i];
            if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
                alphaString += char.toLowerCase();
            }
        }
        var reversed = alphaString.split('').reverse().join('');
        if(alphaString != reversed){
             console.log(`${str} is not a palindrome`);
             done = false;
        }
        else{
             console.log(`${str} is a palindrome`);
             done = true;
        }
    }
    return done;
}


var test = "Eve";
var test_str2 = "race car";
isPalindrome(test_str2);




