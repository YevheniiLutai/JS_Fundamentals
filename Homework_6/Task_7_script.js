const elemMain = document.createElement('main');
elemMain.className = "mainClass check item";
document.body.prepend(elemMain);

const elemDiv = document.createElement('div');
elemDiv.id = 'myDiv';
elemMain.appendChild(elemDiv);

const elemP = document.createElement('p');
elemP.innerText = 'First paragraph';
elemDiv.appendChild(elemP);