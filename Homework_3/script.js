
//Task_1 ---------------------------------------------------

let number = [2, 3, 4, 5];
let prod = 1;

for(let i = 0; i < number.length; i++ ) {
    prod *= number[i];
};

console.log("Task 1.1: Sum = " + prod);

let j = 0;
let prod1 = 1;
while(j < number.length) {
    prod1 *= number[j];
    j++;
};

console.log("Task 1.2: Sum = " + prod1);

//----------------------------------------------------------


//Task_2 ---------------------------------------------------

for(let i = 0; i <= 15; i++ ) {
    if(i % 2 == 0) {
        console.log("Task 2:", i, "is even");
    } else {
        console.log("Task 2:", i, "is odd");
    };
};

//----------------------------------------------------------


//Task_3 ---------------------------------------------------

function randArray(k) {
    let Array = [];
    min = Math.ceil(1);
    max = Math.floor(500);

    for (let i = 0; i < k; i++) {
        Array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    } 

    console.log("Task 3:", Array);
};

randArray(15);

//----------------------------------------------------------


//Task_4 ---------------------------------------------------

let a = Number(prompt("Enter a", "5"));
let b = Number(prompt("Enter a", "3"));

function raiseToDegree(a, b) {
    let powAB = Math.pow(a, b);

    console.log("Task 4: a^b =", a + '^' + b, '=', powAB); 
};

raiseToDegree(a, b);

//----------------------------------------------------------


//Task_5 ---------------------------------------------------

function findMin() {
    let arr = Array.from(arguments);

    console.log("Task 5:", arr);

    arr.sort();

    console.log("Task 5, min number =", arr[0]);
};

findMin(7,4,-2,5,8);
findMin(7,4,-5,5,8);

//----------------------------------------------------------


//Task_6 ---------------------------------------------------

function findUnique(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                /*let result = false;
                console.log("Task 6:", result);*/

                return false;
            };
        };
    };
    /*result = true;
    console.log("Task 6:", result);*/

    return true;
};

console.log("Task 6:", findUnique([1, 2, 3, 5, 3]));  
console.log("Task 6:", findUnique([1, 2, 3, 5, 11])); 

//----------------------------------------------------------


//Task_7 ---------------------------------------------------

function lastElement(arr, x) {

    if (x == null) {
        return arr.pop();
    } else if (x >= arr.length) {
        return arr;
    } else {
        for(i = 0; i <= arr.length - x; i++){
            arr.shift();
        };

        return arr;
    };  
};

console.log("Task 7:", lastElement([3, 4, 10, -5]));      // -5
console.log("Task 7:", lastElement([3, 4, 10, -5],2));   // [10, -5]
console.log("Task 7:", lastElement([3, 4, 10, -5],8));   // [3, 4, 10, -5]
console.log("Task 7:", lastElement([3, 4, 10, -5, 8, 5, 7],5)); 
//----------------------------------------------------------



//Task_8 ---------------------------------------------------
function changeString(text) {
    
    console.log("Task 8, before:", text);
    textArr = text.split('');
    textArr[0] = textArr[0].toUpperCase();

    for (let i = 0; i < textArr.length; i++) {
        if(textArr[i] == ' ') {
            textArr[i + 1] = textArr[i + 1].toUpperCase();
        };
    };

    console.log("Task 8, after:", textArr.join(''));
};

changeString('i love java script');
changeString('Hello my name yevhenii Lutai and I love java script');
//----------------------------------------------------------
