//---------- 1st conditiona;
// // If ur age is more than 12 u can enter the fair or else u have to return
// var age = 12;

// age = 10
// age = 11
// if (age > 10) {
//     console.log("U may enter the fair!");
// } else {
//     console.log("Sorry! u are too earliear to enter the fair , ")
// }

//-------------2nd conditional

// if u are 18 or over u may enjoy all ride,if u r over 13 but not even 18 u may enjoy some ride.and if u are below 13 u have to enjoy childrens ride

// var age = 15;
// age = 14;
// age = 12;
// if (age >= 18) {
//     console.log("u can enjoy any ride");
// } else if (age >= 13) {
//     console.log("u can enjoy some ride not all")
// } else {
//     console.log("u can enjoy children's ride only");
// }


// If u wanna enter to the ghost house if have to 15 over and u have to have ur guardian(must be over 20)

let age = 15;
let withAdult = true;
if (age >= 15) {
    console.log("u may enter the fair");
    if (withAdult) {
        console.log("U can enter the ghost house");
    } 
else {
        console.log("U can't enter the ghost house");
    }
}
else {
    console.log("u can't enter the fair");
}