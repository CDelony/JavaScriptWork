//
// These programs are part of your participation grade
// To receive credit: post answers on Canvas as a single .js file
// (and all of the programs must work!)
//
// Program #1: Generate a number
// The following line of code will generate a random integer from 1 to 100.
//
//	 randomNumber = Math.floor(Math.random() * 100) + 1; 
//
// Write a program that generates and displays a random integer from 1 to 100.
// If the number is less than 26, print the number and a message that it is a small number
// If the number is between 26 and 75, inclusive, print the number and a message that it is a medium number
// Otherwise, print the number and a message that it is a large number

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var readLineSync = require("readline-sync")
var randomNumber = Math.floor(Math.random() * 100) + 1
var outputMsg = " " 

if (randomNumber < 26)
{
	outputMsg = randomNumber + " This is a small number! "
	
}
else if (randomNumber >= 26 && randomNumber <= 76)
{
	outputMsg = randomNumber + " This is a medium number! "
}
else
{
    outputMsg = randomNumber + " This is a large Number! "
}
console.log(outputMsg)
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////

// Progrmm #2: Calculate Profit
// A company has determined that its annual profit is typically 23 percent of total sales.
// Write a program that asks the user to enter the projected sales quanitity and the average price
// The program should calculate the total sales (quantity * average price)
// Displays the profit that will be made from that amount.
//
//
//
//
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
var readLineSync = require("readline-sync")
var sales = readLineSync.question("What are your projected sales? ")
var price = readLineSync.question("What is the average price? ")
var profit = 0.23 * (sales * price)

console.log("The profit you made is: " + profit)

/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////

// Program #3
// One acre of land is 43,560 square feet
// Write the program to enter the total number of square feet in a tract of
// land and didplay the number of acrea.
//
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the next comment block.  Do not alter     //
// any code in any other part of this file.                                    //
//I ///////////////////////////////////////////////////////////////////////////////
var readLineSync = require("readline-sync")
var sqfeet = readLineSync.question("What is the square feet? ")
var calc = sqfeet / 43560
console.log("Acres: " + Math.round(calc))
/////////////////////////////////////////////////////////////////////////////////
// Insert your code between here and the previous comment block.  Do not alter //
// any code in any other part of this file.                                    //
/////////////////////////////////////////////////////////////////////////////////
