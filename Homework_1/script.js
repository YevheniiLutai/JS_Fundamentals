
    //Task_2 ---------------------------------------------------

    console.log("Task 2: Lutai");

    //----------------------------------------------------------


    //Task_3 ---------------------------------------------------

    let a = 5;
    let b = 10;
    alert("Task 3(c): " + "a = " + a + ", " + "b = " + b);
    console.log("Task 3(c): ", "a = ", a, ", ", "b = ", b);
    alert("Task 3(e): " + "a = " + a + ", " + "b = " + b);
    console.log("Task 3(e): ", "a = ", a, ", ", "b = ", b);
   
    //----------------------------------------------------------


    //Task_4 ---------------------------------------------------

    let x;
    let first_object = {
        String: "Yevhenii", 
        Number: 22, 
        Boolean: true,
        Undefined: x, 
        Null: null
    };
    
    console.log("Task 4.1:", first_object);

    let second_object = {
        String: "Lutai", 
        Number: 95, 
        Boolean: false,
        Undefined: undefined, 
        Null: null
    };
    
    console.log("Task 4.2:", second_object);

    //----------------------------------------------------------


    //Task_5 ---------------------------------------------------

    let isAdmin = confirm("Are 18+ years old?");

    console.log("Task 5:", isAdmin);

    //----------------------------------------------------------


    //Task_6 ---------------------------------------------------

    let name = "Yevhenii";
    let surname = "Lutai";
    let group = 548;
    let Date_of_Birthday = "04.03.1998";
    let married = false;

    console.log("Task 6: ", typeof group, typeof married, typeof name, typeof surname, typeof Date_of_Birthday);

    let m;
    let n = null;
   
    console.log("Type 6: ", n, m);

    //----------------------------------------------------------


    //Task_7 ---------------------------------------------------

    let login = prompt("What is your login?", "Yevhenii");
    let mail = prompt("Enter your mail:", "jenia940@gmail.com");
    let password = prompt("Сreate your password:", "qwe123456789qwe");

    alert("Dear " + login + ", your email is " + mail + ", your password is " + password);

    //----------------------------------------------------------


    //Task_8 ---------------------------------------------------

    let second = 60;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let month_28 = day * 28;
    let month_29 = day * 29;
    let month_30 = day * 30;
    let month_31 = day * 31;

    //Spaces for a better view in alert window
    alert("Second in hour: " + hour + ";                                                                        " +
    "Second in day: " + day + ";                                                                      " +
    "Second in month(28 days): " + month_28 + ";                                            " +
    "Second in month(29 days): " + month_29 + ";                                            " +
    "Second in month(30 days): " + month_30 + ";                                            " +
    "Second in month(31 days): " + month_31 + ";                                            ");

    //----------------------------------------------------------