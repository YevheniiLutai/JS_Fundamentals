
//Task_1 ---------------------------------------------------

let x = 1;
let y = 2;

let res1 = String(x) + y;
console.log("Task 1.1:", res1); // "12"
console.log("Task 1.1:", typeof res1); // "string"


let res2 = Boolean(x) + String(y);
console.log("Task 1.2:", res2); // "true2"
console.log("Task 1.2:", typeof res2); // "string"


let res3 = Boolean(x);
console.log("Task 1.3:", res3); // true
console.log("Task 1.3:", typeof res3); // "boolean"


let res4 = Number(Boolean(x) + String(y));
console.log("Task 1.4:", res4); // NaN
console.log("Task 1.4:", typeof res4); // "number"

//----------------------------------------------------------


//Task_2 ---------------------------------------------------

let number = prompt("Enter number: ", 123);

if (number >= 0 && number % 2 == 0) {
    console.log("Task 2(a): Even and positive number")
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

console.log("Task 3.5: Number of elements in array", task3.length);

task3[4] = prompt("Enter five's element:", "Lutai");

console.log("Task 3.7:", task3[4]);
console.log("Task 3.8, before delete first element:", task3);
task3.shift();
console.log("Task 3.8, after delete first element:", task3);

//----------------------------------------------------------


//Task_4 ---------------------------------------------------

let cities = ["Rome", "Lviv", "Warsaw"];

console.log("Task 4:", cities.join('*'));

//----------------------------------------------------------


//Task_5 ---------------------------------------------------

let isAdult = Number(prompt("How old are you?", "18"));

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

let a = Number(prompt("Enter size a: ", "3"));
if (a < 0) {
    alert("Incorect data!");
    console.log("Task 6: Incorect data! A is negative number");
}

let b = Number(prompt("Enter size b: ", "4"));
if (b < 0) {
    alert("Incorect data!");
    console.log("Task 6: Incorect data! B is negative number");
}

let c = Number(prompt("Enter size c: ", "5"));
if (c < 0) {
    alert("Incorect data!");
    console.log("Task 6: Incorect data! C is negative number");
}

//S = sqrt(p*(p - a)*(p - b)*(p - c)) - Heron's formula
if (a < 0 || b < 0 || c < 0) {
    console.log("Task 6: Incorect date!")
}
else {
    let p = (a + b + c) / 2; // Semiperimeter formula
    let S = Math.sqrt(p*(p - a)*(p - b)*(p - c)); 

    console.log("Task 6: Area of a triangle: ", +S.toFixed(3));

    // C^2 = A^2 + B^2 - Pythagorean theorem

    if (c * c == a * a + b * b) {
        console.log("Task 6: This triangle with at right angle");
    }
    else {
        console.log("Task 6: This triangle without at right angle");
    }
}

//----------------------------------------------------------


//Task_7 ---------------------------------------------------

let time = (new Date().getHours());
 
if (time >= 0 && time == 23) {
    console.log("Task 7.1: Good night! Time is", time, "hour");
}
else if (time >= 6 && time <= 11) {
    console.log("Task 7.1: Good morning! Time is", time, "hour");
}
else if (time >= 12  && time <= 17) {
    console.log("Task 7.1: Good day! Time is", time, "hour");
}
else if (time >= 18  && time <= 22) {
    console.log("Task 7.1: Good evening! Time is", time, "hour");
}

switch(true) {
    case (time >= 0 && time == 23):
        console.log("Task 7.2: Good night! Time is", time, "hour");
        break;
    case (time >= 6 && time <= 11):
        console.log("Task 7.2: Good morning! Time is", time, "hour");
        break;
    case (time >= 12  && time <= 17):
        console.log("Task 7.2: Good day! Time is", time, "hour");
        break;
    case (time >= 18  && time <= 22):
        console.log("Task 7.2: Good evening! Time is", time, "hour");
        break;
}
//----------------------------------------------------------