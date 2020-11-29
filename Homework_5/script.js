
//************************** Task_1 *************************
let mentor = {
    course: "JS fundemental",
    duration: 3, 
    direction: "web-development"
};

function propsCount(currentObject) {
    console.log("Task 1. Object length =", Object.keys(currentObject).length);
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
    console.log("Task 2:", Object.values(obj));
    console.log("Task 2:", Object.entries(obj))
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
    showFullName(midleName) {
        return ("Task 3: " + this.name + " " + this.surname + " " + midleName);
    };
    showCourse() {
        let course = (new Date().getFullYear()) - this.year;
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
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    };

    set Exp(value) {
        if (value < 0) {
            return "Experience is negative";
        }
        this.#experience = value;
    };

    get Exp() {
        return this.#experience;
    }

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        return salary;
    }

    showSalaryWithExperience() {
        return this.showSalary() * this.#experience;
    };

    showExperience() {
        return this.#experience;
    }
};

let worker1 = new Worker("Lutai Yevhenii", 48, 23);
console.log("Task 4. Full name:", worker1.fullName);
console.log("Task 4. " + worker1.fullName +  " salary: " + worker1.showSalary());
console.log("Task 4. Experince = ", worker1.showExperience());
console.log("Task 4. Salary with experience = ", worker1.showSalaryWithExperience());
worker1.Exp = 1.5;
console.log("Task 4. New experience = ", worker1.showExperience());
console.log("Task 4. Salary with new experience = ", worker1.showSalaryWithExperience());

let worker2 = new Worker("Jane Jankins", 25, 30);
console.log("Task 4. Full name:", worker2.fullName);
console.log("Task 4. " + worker2.fullName +  " salary: " + worker2.showSalary());
console.log("Task 4. Experince = ", worker2.showExperience());
console.log("Task 4. Salary with experience = ", worker2.showSalaryWithExperience());
worker2.Exp = 1.5;
console.log("Task 4. New experience = ", worker2.showExperience());
console.log("Task 4. Salary with new experience = ", worker2.showSalaryWithExperience());

let worker3 = new Worker("Elon Musk", 20, 22);
console.log("Task 4. Full name:", worker3.fullName);
console.log("Task 4. " + worker3.fullName +  " salary: " + worker3.showSalary());
console.log("Task 4. Experince = ", worker3.showExperience());
console.log("Task 4. Salary with experience = ", worker3.showSalaryWithExperience());
worker3.Exp = 1.5;
console.log("Task 4. New experience = ", worker3.showExperience());
console.log("Task 4. Salary with new experience = ", worker3.showSalaryWithExperience());

let workerArr = [worker1, worker2, worker3];

workerArr.sort(function(a,b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
})

console.log("Task 4. Sorted salary:");

for(let i = 0; i < workerArr.length; i++) {
    console.log("Task 4: " + workerArr[i].fullName + ": " + workerArr[i].showSalaryWithExperience());
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
        return (this.a * this.h) / 2; 
    };
};

class Square extends GeometricFigure {
    constructor(a) { 
        super();
        this.a = a;
    };
    getArea() {
        return this.a * this.a;
    };
};

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    };
    getArea() {
        return Math.PI * this.radius * this.radius;
    };
};

function handleFigures(figures) { 
    let arrArea = [];
    for (let i = 0; i < figures.length; i++) {
        if (figures[i] instanceof GeometricFigure) {
            console.log(("Task 5. Geometric figure: " + figures[i].toString() + " - area:  " + figures[i].getArea()));
            arrArea[i] = figures[i].getArea();
        } else {
            console.log("Task 5. Class with name " + figures[i].toString() + " not found!")
        }
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log("Task 5. Total area: " + arrArea.reduce(reducer));
};

const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);

//----------------------------------------------------------