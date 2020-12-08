
//************************** Task_1 *************************\\

alert(document.getElementById('test').innerHTML = "Last");

alert((document.querySelector('#test').innerHTML = "Last"));

alert((document.body.firstElementChild.innerHTML = "Last"));

//-----------------------------------------------------------\\


//************************** Task_2 *************************\\

alert((document.querySelector('img').outerHTML = '<img class="image" src="images/cat.jpg">'))

//-----------------------------------------------------------\\

//************************** Task_4 *************************\\

const elem = document.getElementById('list');

alert(
    elem.firstElementChild.innerHTML + ", " +
    elem.lastElementChild.innerHTML + ", " +
    elem.firstElementChild.nextElementSibling.innerHTML + ", " +
    elem.lastElementChild.previousElementSibling.innerHTML + ", " +
    elem.firstElementChild.nextElementSibling.nextElementSibling.innerHTML 
)

const elems = document.querySelector('#list').children; 

alert(
    elems[0].innerHTML + ", " +
    elems[4].innerHTML + ", " +
    elems[1].innerHTML + ", " +
    elems[3].innerHTML + ", " +
    elems[2].innerHTML
    );

//-----------------------------------------------------------\\

//************************** Task_5 *************************\\

document.getElementsByTagName('h1')[0].style.backgroundColor = 'LawnGreen';
document.getElementById('myDiv').firstElementChild.style.fontWeight = 'bold';
document.getElementById('myDiv').firstElementChild.nextElementSibling.style.color = 'red';
document.getElementById('myDiv').lastElementChild.previousElementSibling.style.textDecoration = 'underline';
document.getElementById('myDiv').lastElementChild.style.fontStyle = 'italic';
document.getElementById('myList').style = 'list-style: none; display: flex';
document.getElementsByTagName('span')[0].style = 'display: none'; //first variant 
document.getElementsByTagName('span')[1].style.opacity = '0'; //second variant

//-----------------------------------------------------------\\

//************************** Task_6 *************************\\

let text1 = prompt("Enter something to input 1: ", 'Hello 1');
let text2 = prompt("Enter something to input 2: ", 'Hello 2');

document.getElementById('input1').value = text2;
document.getElementById('input2').value = text1;

document.getElementById('input3').value = text1;
document.getElementById('input4').value = text2;

//-----------------------------------------------------------\\