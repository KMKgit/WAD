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
    if(var1 === var2){
        console.log("The two variables have the same value and type");
    } else if(var1 == var2 && typeof(var1) != typeof(var2)){
        console.log("The two variables have the same value but not the same type");
        console.log("The type of var1 is " + typeof(var1));
        console.log("The type of var2 is " + typeof(var2));
    } else{
        console.log("The two variables do not have the same value nor the same type");

    }
}

// After completing the function pass different values instead of var1 and var2 to test your function

compareVariables (1, 2);
compareVariables (1, 1);
compareVariables (1, "1");
compareVariables (1, 'c');

function fibonacci(n) {
    var first = 0;
    var second = 0;
    var sum = 0;
    var count = 1;

    console.log("Fibonacci Sequence: ")
    while (n >= count) {
        console.log(sum);
        if(count == 1){
            second = 1;
            count += 1;
            continue
        }
        sum = first + second;
        second = first;
        first = sum;
        count += 1;
    }
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(7);