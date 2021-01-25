// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    return (num * (num + 1))/2;
}

console.log("The total equals = " + addUp(15));

//Create a function that takes the age and return the age in days.

function calcAge(age) {
    return	age * 365;
}

console.log("If you are 31 years old, you are " + calcAge(31) + " days old");
console.log("If you are 30 years old, you are " + calcAge(30) + " days old");

//Write a function that converts hours into seconds.

function howManySeconds(hours) {
    return (hours * 60) * 60;
}

console.log("This is how many seconds in 3 hours. Seconds = " + howManySeconds(3));