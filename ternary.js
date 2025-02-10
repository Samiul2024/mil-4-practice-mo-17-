/**
 * Tarnary ==> three parts
 * 
 *  ?   :
 *  condition ? do something when true : do something when false
 */

const age = 110;

//      Normal if else
// if(age >= 18){
//     console.log('U can vote')
// }
// else{
//     console.log('Jaw baccha ghumay thako')
// }
// simple Ternary ef else
age >=18 ? console.log('Vote diyo') : console.log('ghumay thako')
let price = 500;
const isLeader = false;
if (isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
//console.log(price)
price = isLeader === true ? 0 : price + 100;


// OPTIONAL: semi-advanced ternary

if( isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else{
        price = 0;
    }
}
else{
    price = price + 100;
}
// ternary
//price > 1000 ? price /2 : 0

// Feel free to ignore this one
//price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
price = isLeader === true ? 
            price > 1000 ? 
                price /2 : 0
         : price + 1000;
//price = isLeader === true;