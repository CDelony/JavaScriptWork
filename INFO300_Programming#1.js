//Program #1
/*
Write a program that predicts the approximate size of a population of organisms.
The program should allow the user to enter the starting number of organisms, the
average daily population increase (as a percentage), and the number of days the
organisms will be left to multiply.
*/

var readLineSync = require("readline-sync")
var NOrganisms = 0
var increase = 0
var days = 0



NOrganisms = readLineSync.question("Please enter the starting number of organisms: ")
increase = readLineSync.question("Please enter the average daily increase as a percentage: ")
days = readLineSync.question("Please enter the number of days to multiply: ")

console.log("Day  \tPopulation")
for (let i = 0; i < days; i++)
{

    if (i > 0){
        NOrganisms *= 1 + increase/100
        
        console.log((i +1) + "\t" + NOrganisms)
        NOrganisms += days 
    }
    else{
        console.log((i+1) + "\t" + NOrganisms)
    }
    
    
    
    
}


// Program 2
/*
The month of February normally has 28 days. But if it is a leap year, February
has 29 days. Write a program that asks the user to enter a year. The program
should then display the number of days in February that year. Use the following
criteria to identify leap years:
*/

var readLineSync = require("readline-sync")
var year = 0
var input = true

year = readLineSync.question("Please enter a year: ")

if (year % 100 != 0 && year % 4 == 0)
{
    console.log("Febuary " + year + " This is a leap year meaning that there are 29! ")
}
else if (year % 400 == 0)
{
    console.log("Febuary " + year + " is a leap year meaning there are 29 days!")
}
else
{
    console.log("Febuary " + year + " This is not a leap year meaning that there are 28 days!")
}

// Program 3 
/*
Ask the user to input a string of any length
Count the number of consonants and the number of times the letter e (lower or
upper case appears in the string
*/

var readLineSync = require("readline-sync")
var input = "" 
var count1 = 0
var count2 = 0 
const vowels = ["a", "e", "i", "o", "u"]

input = readLineSync.question("Please enter a string of any length: ")

for (let i = 0; i < input.length; i++)
{
    if (vowels.includes(input[i].toLowerCase()))
    {
        count1 = count1 + 1
    }
    else {
        count2 = count2 + 1
    }
   
}
console.log("Vowels: "+ count1 + " Consonants " + count2)
