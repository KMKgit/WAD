let userName = "Andy"
let userAge = 45
const userPets = ["Cat", "Dog"]
var userBalance = 100
const EVERY_DAY_SPENDING = 15.3
var everyDaySpendingPerPet = 2.4
var daysSurvived = 0

//console.log("Text", variable) allows you to write to the console

console.log("User Name", userName)
console.log("User Age", userAge)
console.log("User Balance", userBalance)
console.log("Every Day Spending Per Pet", everyDaySpendingPerPet)
console.log("Days Survived", daysSurvived)

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

function nameVertical(name) {
    console.log("Name: " + name)
    for (let i = 0; i < name.length; i++){
        console.log(name[i])
    }

}
// Sarah for example
nameVertical("Sarah")

function code(n) {
    return (n < 100) ? "Not a valid code"
    : (n < 200) ? "Informational responses"
    : (n < 300) ? "Successful responses"
    : (n < 400) ? "Redirection messages"
    : (n < 500) ? "Client error responses"
    : (n < 600) ? "Server error responses"
    : "Not a valid code";
 }
// for example n = 121
console.log(code(121));

function compareVariables(var1, var2) {
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables (var1, var2);