//
// Tuition rates at Cleveland State University (per semester) are as follows:
//
//	A part-time student, which is defined as taking less than 12 credits, is
//	charged $881 per credit.  A full-time student, which is defined as taking
//	12 to 18 credits, pays a flat rate of $10,572 per semester.  A full-time
//	overload student, which is defined as a student taking more than 18
//	credits, pays $10,572 for the first 18 credits plus $587 for every credit
//	above the first 18 credits.
//
// Write a progrtam that prompts the user for:
// a) The student's name
// b) The number of courses (an integer)
// c) For each course: Prompt the user for
// - The course name (e.g., INFO 300)
// - The number of credit hours (e.g., 3)
// d) The program respondes with:
//    - FOR EACH Course Entered
// - Prints the name of the course, a space, and the credit hours for the course
// - A message communicating the runnivng number of credit hours
//    - AT THE END OF ENTRY
// - The student's name and the final number of credit hours
// - A message starting whether the student is a part time, full-time, or overload student
// - The tuition due
//
// Run the program in node.  Post to Canvas once completed for participation credit
//

var readLineSync = require("readline-sync")
var name = readLineSync.question("What is your name? ")
var nbcourses = readLineSync.question("How many courses are you taking? ")
var test = " "
var count = 0
var typesdt = " "
var tuition = 0

for (let i = 0; i < nbcourses; i++)
{
    var course = readLineSync.question("What is the name of the course ? ")
    var credit = readLineSync.question("How many credit hrs is this class? ")
    test +=course+" " + credit + "\n "
    count = count + Number(credit)
}
if (count < 12)
{
    typesdt = "You are a part time student!"
    tuition = 881 * nbcourses
}
else if (count >= 12 && count <=18)
{
    typesdt = "You are a full time student!"
    tuition = 10572
}
else{
    typesdt = "You are a Overload Student!"
    tuition = 10572 + 587/count
}
console.log(name +"'s" +" Courses: " +" \n " +test)

console.log(name + " is taking " + nbcourses + " courses " + "for a total of " + count + " credits! ")
console.log(typesdt)
console.log("Tuition: " + "$"+Math.round(tuition))

