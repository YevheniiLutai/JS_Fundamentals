//************************** Task_1 *************************\\
function upperCase(str) {
    regexp = /^[A-Z]/;

    if (regexp.test(str)) {
        console.log("Task 1: String's not starts with uppercase character");
    } else {
    
      console.log("Task 1: String's starts with uppercase character")
    };
};

upperCase('Afdsf');
//-----------------------------------------------------------\\

//************************** Task_2 *************************\\
function checkEmail(str) { 
    if (/@{2}/.test(str) || /\.{2}/.test(str) || !/@/.test(str) || !/\./.test(str)) {
          return false;
    } else {
          return true;  
    }
}

console.log('Task 2: ' + checkEmail("Qmail2@gmail.com"));
//-----------------------------------------------------------\\

//************************** Task_3 *************************\\
function findDB(str) {
   let arrStr = str.match(/d(b+)(d)/i);
   console.log('Task 3: ' + arrStr.join(', '));
};

findDB("cdbBdbsbz");
//-----------------------------------------------------------\\

//************************** Task_4 *************************\\
function replaceWords(str) {
    console.log('Task 4: ' + str.replace(/(\w+)\s(\w+)/, '$2, $1'))
}

replaceWords('Java Script');
//-----------------------------------------------------------\\

//************************** Task_5 *************************\\
function checkCreditCard(number) {
    if(/^\d{4}\-\d{4}\-\d{4}\-\d{4}/.test(number)) {
        console.log("Task 5: Card is correct");
    } else {
        console.log("Task 5: Card isn't correct");
  };
};

checkCreditCard("9999-9999-9999-9999")
//-----------------------------------------------------------\\

//************************** Task_6 *************************\\
function strongCheckEmail(str) {
    let regexp = /^[A-Za-z0-9]+[\w]*-?[\w]*@[a-z]+\.[a-z]+$/ 
    if (regexp.test(str)) {
        return console.log("Task 6: Email is correct!");
    } else {
        return console.log("Task 6: Email is not correct!");
    };   
};

strongCheckEmail('my_mail@gmail.com');
strongCheckEmail('#my_mail@gmail.com');
//-----------------------------------------------------------\\

//************************** Task_7 *************************\\
function checkLogin(str) {
    if(str.length >= 2 && str.length <= 10 && /^[a-zA-Z][A-Za-z0-9.]+$/.test(str)) {
        console.log('Task 7: ' + true);
    } else {
        console.log('Task 7: ' + false);
    };

    let arrNum = str.match(/[(\d\.\d)]+/g);
    
    if(arrNum != null) {
        console.log('Task 7: ' + arrNum.join(', '));
    } else {
        console.log("Task 7: Haven't numbers!")
    }
} 

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
//-----------------------------------------------------------\\