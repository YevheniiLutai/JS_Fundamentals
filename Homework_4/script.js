
//Task_1 ---------------------------------------------------
function testThrow(exception) {
    try {
        throw exception;
    } catch (error) {
        console.log("Task 1. Caught: ", error);
    }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));
//----------------------------------------------------------


//Task_2 ---------------------------------------------------
function calcRectangleArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
        throw ("Parametr is not a number");
    }
    return width * height;
}
try {
    //console.log("Task 2:", calcRectangleArea(10, 'j'));
    console.log("Task 2:", calcRectangleArea (45, 5));
} catch(e) {
    console.log(e);
};
//----------------------------------------------------------


//Task_3 ---------------------------------------------------
function checkAge() {
    let age = prompt('How old are you?', );
    console.log(typeof age);
    if (age == null || age == 0) {
        throw Error("The field is empty! Please enter your age!");
    } else if (isNaN(age)) {
        throw TypeError("Not a Numebr!");
    } else if ( age < 14) {
        throw Error("Your age a less 14 years!")
    } else {
        alert("You can watch a film!");
        console.log("You can watch a film!");
    };
};

try {
    checkAge();
} catch(e) {
    alert("Task 3. " + e.name +": " + e.message);
    console.log("Task 3. " + e.name +": " + e.message);
};
//----------------------------------------------------------


//Task_4 ---------------------------------------------------
//First variant
class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    };
};

function showMonthName(month) {
    let monthNames = ["0", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    if (month > 12 || month < 1 || isNaN(month) || month == null) {
        throw new MonthException("Incorrect month number!");
    } else {
        return monthNames[month];
    };
}
try {
    console.log("Task 4: " + showMonthName(11));
} catch(error) {
    console.log("Task 4: " + error.name + " " + error.message);
};
//----------------------------------------------------------

//Task_4 ---------------------------------------------------
//----------------------------------------------------------
//Second variant with extends Error and super()
/*class MonthException extends Error{
    constructor(message) {
        super(message);
        this.name = "MonthException";
    };
};

function showMonthName(month) {
    let monthNames = ["0", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    if (month > 12 || month < 1 || isNaN(month) || month == null) {
        throw new MonthException("Incorrect month number!");
    } else {
        return monthNames[month];
    };
}
try {
    console.log("Task 4", showMonthName('as'));
} catch(error) {
    console.log(error);
};*/

//----------------------------------------------------------


//Task_5 ---------------------------------------------------
function showUser(id) {
    let user = new Object;
    if (id < 0 ) {
        throw ("ID must not be negative: " + id);
    } else if (isNaN(id)) {
        throw ("ID must be a number: " + id)
    } else {
        user.id = id;
        return user;
    };
};

function showUsers(ids) {
    let users = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            users.push(showUser(ids[i]));
         } catch (exception) {
            console.log("Task 5. Error: " + exception);
        }
    }
    return users;
};

console.log("Task 5: ", showUsers([7, -12, 44, 22, 12, 3, "s", 7]));
//----------------------------------------------------------