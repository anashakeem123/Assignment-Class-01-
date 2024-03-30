//////////////////// Start Coding //////////////////////
// Ticket Visitor Assigement :01
// Age Calculator Ticket price:
let age = 6;
// child Visitor age:
if (age >= 5 && age <= 12) {
    console.log("Child visitor Ticket price : 50"); // Ticket Price 50% Discount
}
// Teenager Visitor age:
else if (age >= 13 && age <= 17) {
    console.log("Teenager visitor Ticket price : 80"); // Ticket Price 20% Discount
}
// Adults Visitor age:
else if (age >= 18 && age <= 30) {
    console.log("Adults visitor Ticket price : 100"); // Ticket Price No Discount
}
// Seniore Citizens Visitor age:
else if (age >= 55 && age <= 70) {
    console.log("Senior Citizens visitor Ticket price : 70"); // Ticket Price 30% Discount
}
// Default age:
else {
    console.log("Invalid age"); // Just to signify invalid age
}
export {};
//////////////////// The End ///////////////////
