let elemMain = document.createElement('main');
elemMain.className = "mainClass check item";
document.body.prepend(elemMain);

let elemDiv = document.createElement('div');
elemDiv.id = 'myDiv';
elemMain.appendChild(elemDiv);

let elemP = document.createElement('p');
elemP.innerText = 'First paragraph';
elemDiv.appendChild(elemP);