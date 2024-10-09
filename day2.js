//odd or even exercise
/*******************************************************
 * Below, there are 2 variables. first, write a logical flow to determine if a variable is odd or even
 *  After, comment out the varibles to test your code
 */
// var number = 2341
// var number = 634562
//HINT use the modulo
//write code below
/*
var number = 2341;
if( number % 2){
    console.log("Izz Even bruhh")
}else{
    console.log("odd bruhh")
}

var num1 = 634562;
if(num1 % 2){
    console.log("Even pre")
} else {
    console.log("Odd pre")
}

if (number == num1){
    console.log("Astiggg")
}else if(number % num1) {
    console.log("Sheeeez")
}else if (num1 % number){
    console.log("sccobs pre")
}

let fName = "karol"
//Same variable is defined same, there will be no error.
fName = "will"

if(true){
    let fName = "Karol"
    console.log(fName)
}
console.log(fName)

//Arrays

let allKindsOfDonuts = ["Original", "Sugar", "Glazed", "Chocolate Iced", "Strawberry Iced", "Powdered", "Coffee Roll", "Boston Creme", "Chocolate Cruller", "Glazed Cruller", "Jelly Filled", "Sour Cream", "Glazed Blueberry", "Glazed Chocolate", "Apple Fritter", "Cookies and Creme", "S'mores"]
//console.log(allKindsOfDonuts);


//list below the number of items in the array
console.log(allKindsOfDonuts.length)

//remove the last item of the array
allKindsOfDonuts.splice(16,1); //allkindsofDonuts.pop()
console.log(allKindsOfDonuts);

//add "Maple Bar" at the beginning of the array
allKindsOfDonuts.unshift("Maple Bar");
console.log(allKindsOfDonuts);

//determine the index of "Glazed Cruller"
let glazed = allKindsOfDonuts.indexOf("Glazed Cruller")
console.log(glazed)

//Remove the "Jelly Filled" and the "Sour Cream" donut

allKindsOfDonuts.splice(11,2)
console.log(allKindsOfDonuts)

//Print out the final array
console.log(allKindsOfDonuts[14]);//console.log(allkindsOfDonuts)
*/

//let array = [1,2,3,4,5,6,7,8,9,10]

/*array.forEach(element => {
    console.log(element)
});*/

/*let counter = 1
do{
    console.log("ey bruhh");
    counter++
}
while(counter < 10){
    //console.log("zup bruh");
}*/

const numbers = [...Array(101).keys()];

//console.log(numbers)

for(let index = 1; index < numbers.length; index++){
    const num = numbers[index];
   if(num % 15 == 0){
    console.log("fizzbuzz");
   }else if(num % 5 == 0){
    console.log("buzz");
   }else if(num % 3 == 0 ){
    console.log("fizz");
   }else{
    console.log(num);
   }
}