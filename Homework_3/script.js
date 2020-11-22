
//Task_1 ---------------------------------------------------

let number = [7, 1, 14, 19, 27]
let sum = 0;
for(let i = 0; i < number.length; i++ ) {
    sum += number[i];
}

console.log("Task 1.1: Sum = " + sum);

let j = 0;
let sum1 = 0;
while(j < number.length) {
    sum1 += number[j];
    j++;
}

console.log("Task 1.2: Sum = " + sum1);

//----------------------------------------------------------


//Task_2 ---------------------------------------------------

for(let i = 0; i <= 15; i++ ) {
    if(i % 2 == 0) {
        console.log("Task 2:", i + " even");
    }
    else {
        console.log("Task 2:", i + " odd");
    }
};

//----------------------------------------------------------


//Task_3 ---------------------------------------------------

function randArray(k) {
    let Array = [];
    for (let i = 0; i < k; i++) {
        Array.push(Math.round(Math.random() * 500));
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
    console.log("Task 4: ", powAB); 
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
                let result = false;
                console.log("Task 6:", result);
                return;
            };
        };
    };
    result = true;
    console.log("Task 6:", result);
    return;
};

findUnique([1, 2, 3, 5, 3]);  
findUnique([1, 2, 3, 5, 11]); 

//----------------------------------------------------------


//Task_7 ---------------------------------------------------

function lastElement(arr, x) {
    let i = 0;
    if (x == null) {
        return arr.pop();
    } else if (x >= arr.length) {
        return arr;
    } else {
        while (i != x) {
        arr.shift();
        i++;
    };
        return arr;
    }
    
};

console.log("Task 7:", lastElement([3, 4, 10, -5]));      // -5
console.log("Task 7:", lastElement([3, 4, 10, -5],2));   // [10, -5]
console.log("Task 7:", lastElement([3, 4, 10, -5],8));   // [3, 4, 10, -5]
console.log("Task 7:", lastElement([3, 4, 10, -5, 8,-7, 45, 55, 65],5));
//----------------------------------------------------------



//Task_8 ---------------------------------------------------

function changeString(text) {
    textArr = text.split();
    console.log(textArr);
    for (let i = 0; i < textArr.length; i++) {
        if(textArr[i] = 'a') {
            //let j = i + 1;
            console.log(textArr[i].toUpperCase());
        }
        console.log(textArr);
    }
    console.log(textArr);
}

changeString('i love java script');

//----------------------------------------------------------
