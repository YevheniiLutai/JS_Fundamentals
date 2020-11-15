
//Task_1 ---------------------------------------------------

let x = 1;
let y = 2;

let res1 = String(x + y);
console.log("Task 1.1:", res1); // "12"
console.log("Task 1.1:", typeof res1); // "string"


let res2 = Boolean(x) + String(y);
console.log("Task 1.2:", res2); // "true2"
console.log("Task 1.2:", typeof res2); // "string"


let res3 = Boolean(x + y);
console.log("Task 1.3:", res3); // true
console.log("Task 1.3:", typeof res3); // "boolean"


let res4 = Number(Boolean(x) + String(y));
console.log("Task 1.4:", res4); // NaN
console.log("Task 1.4:", typeof res4); // "number"

//----------------------------------------------------------


//Task_2 ---------------------------------------------------

let number = prompt("Enter number: ", 123);

if (number >= 0 && number % 2 == 0) {

    сonsole.log("Task 2(a): Even and positive number");

}
else if (number < 0) {

    console.log("Task 2(a): Even but not positive number");

}
else if (number % 2 != 0){

    console.log("Task 2(a): Positive but not even number");
}
else if(number < 0 && number % 2 != 0) {

    сonsole.log("Task 2(a): Not even and not positive number");

}


if (number % 7 == 0) {

    console.log("Task 2(b): Multiple of 7")
}
else {
    console.log("Task 2(b): Not multiple of 7")
}

//----------------------------------------------------------


//Task_3 ---------------------------------------------------

let task3 = [];

task3[0] = 12;
task3[1] = "Yevhenii";
task3[2] = true;
task3[3] = null;

console.log("Task 5.5:", task3.length);

task3[4] = prompt("Enter five's element:", "Lutai");

console.log("Task 5.7:", task3[4]);

console.log("Task 5.8:", task3.shift);




//----------------------------------------------------------


//Task_4 ---------------------------------------------------

let cities = ["Rome", "Lviv", "Warsaw"];

let cities_string = cities.map(function(city) {return city + "*"});

console.log(cities_string);

//----------------------------------------------------------


//Task_5 ---------------------------------------------------

let isAdult = prompt("How old are you?", "18");

isAdult = Number(isAdult);

if (isAdult >= 18 ) {
    alert("You are mojority");
}
else if (isAdult <= 10) {
    alert("You are so young");
}
else {
    alert("You are teenager");
}
 

//----------------------------------------------------------


//Task_6 ---------------------------------------------------


let a = prompt("Enter size a: ", "10");
a = Number(a);
switch(a > 0 ){
    case a:
        break;
    default:
        alert("Incorrect data. Try again!");
}
let b = prompt("Enter size b: ", "4");
b = Number(b);
let c = prompt("Enter size c: ", "11");
c = Number(c);


//S = sqrt(p*(p - a)*(p - b)*(p - c)) - Heron's formula

let p = (a + b + c) / 2; // Semiperimeter formula
let S = Math.sqrt(p*(p - a)*(p - b)*(p - c)); 

console.log("Area of a triangle: ", +S.toFixed(3));


//----------------------------------------------------------


//Task_7 ---------------------------------------------------

let time = (new Date().getHours());
 
if (time == 23 || time == 00 || time == 1 || time == 2 || time == 3 || time == 4 || time == 5){

    console.log("Good night! Time is", time, "hour");

}
else if (time == 6 || time == 7 || time == 8 || time == 9 || time == 10 || time == 11){

    console.log("Good morning! Time is", time, "hour");

}
else if (time == 12 || time == 13 || time == 14 || time == 15 || time == 16 || time == 17){

    console.log("Good day! Time is", time, "hour");

}
else if (time == 18 || time == 19 || time == 20 || time == 21 || time == 22){

    console.log("Good evening! Time is", time, "hour");

}

//----------------------------------------------------------