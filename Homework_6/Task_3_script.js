const elemP = document.querySelectorAll('div p');
const elemH = document.querySelectorAll('body h2');

for (let i = 0; i < elemH.length; i++) {
    console.log('Selector text', i + ':', elemH[i].innerHTML);
};

for (let i = 0; i < elemP.length; i++) {
    console.log('Selector text', i + ':', elemP[i].innerHTML);
};