//************************** Task_1 *************************\\
function upperCase(str) {
    regexp = /^[A-Z]/;

    if (regexp.test(str)) {
        console.log("String's not starts with uppercase character");
    } else {
    
      console.log("String's starts with uppercase character")
    };
};

upperCase('Afdsf');
//-----------------------------------------------------------\\
function checkEmail(str) { 
    regexp = /\w+@/;
    
    if (regexp.test(str)) {
          return true;
    } else {
          return false;
    }   
}

console.log(checkEmail("aaaa@aaa.aaa"));
//************************** Task_2 *************************\\

//-----------------------------------------------------------\\

//************************** Task_3 *************************\\
function findDB(str) {
   let regexp = /[^d]/;
   let arrStr = str.match(regexp);
   console.log(arrStr);
};

findDB("cdbBdbsbz");
//-----------------------------------------------------------\\

//************************** Task_4 *************************\\

function checkSelectedInput() {
  let  tagInputCheked = document.querySelectorAll('input:checked')
    if (tagInputCheked.length == 3) {
        document.querySelectorAll('input').forEach(elem => elem.disabled=true);
    }
}
//-----------------------------------------------------------\\

//************************** Task_5 *************************\\
function replaceWords(str) {
    console.log(str.replace(/(\w+)\s(\w+)/, '$1, $2'))
}

replaceWords('Java Script');
//-----------------------------------------------------------\\

//************************** Task_6 *************************\\
function checkCreditCard(number) {
    if(/^\d{4}\-\d{4}\-\d{4}\-\d{4}/.test(number)) {
        console.log("Cadr is correct");
    } else {
        console.log("Card isn't correct");
  };
};

checkCreditCard("9999-9999-9999-9999")
//-----------------------------------------------------------\\

//************************** Task_7 *************************\\
//-----------------------------------------------------------\\