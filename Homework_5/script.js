
//************************** Task_1 *************************
let mentor = {
    course: "JS fundemental",
    duration: 3, 
    direction: "web-development"
};

function propsCount(currentObject) {
    let size = Object.keys(currentObject).length;
    console.log("Task 1:", size);
};

propsCount(mentor);
//-----------------------------------------------------------


//************************** Task_2 *************************
let something = {
    city: "Kyiv",
    country: "Ukraine",
    leptop: "Lenovo",
    year: 2020,
    ocean: "Pacific ocean"
};

function showProps(obj) {
    
};

showProps(something);
//-----------------------------------------------------------


//************************** Task_3 *************************
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
    showFullName() {
        return ("Task 3: " + this.namename + this.surname);
    };
};

class Student extends Person {
    constructor(name, surname, year, midleName) {
        super(name, surname);
        this.year = year;
        this.midleName = midleName;
    };
    showFullName() {
        super.showFullName();
        return ("Task 3: " + this.name + " " + this.surname + " " + this.midleName);
    };
    showCourse() {
        let currentYear = (new Date().getFullYear());
        let course = currentYear - this.year;
        if (course > 6) {
            return "You are no longer a student!"
        } else if (course == 0) {
            return "You just star studie!"
        } else if (course < 0) {
            return "It's in future! Now, you are not yet a student!"
        } else {
            return course;
        }
    };
};

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Task 3. Current course: " + stud1.showCourse()); //Current course: 5

//-----------------------------------------------------------


//************************** Task_4 *************************
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    };
    showSalary() {
        let salary = this.dayRate * this.workingDays;
        return salary;
    }
    showSalaryWithExperience() {

    };
};
//-----------------------------------------------------------


//************************** Task_5 *************************
class GeometricFigure {
    getArea() {
        return 0;
    };
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
};

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    };
    getArea() {
        let S = (this.a * this.h) / 2;
        return S; 
    };
};

class Square extends GeometricFigure {
    constructor(a) { 
        super();
        this.a = a;
    };
    getArea() {
        let S = this.a * this.a;
        return S;
    };
};

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    };
    getArea() {
        let S = Math.PI * this.radius * this.radius;
        return S;
    };
};

function handleFigures() {

};

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
console.log(figures);
//console.log(handleFigures(figures));

//----------------------------------------------------------