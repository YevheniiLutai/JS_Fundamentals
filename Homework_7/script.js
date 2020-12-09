//************************** Task_1 *************************\\
let newWin = window.open("", "", "width=300,height=300");

setTimeout(() => {
  newWin.resizeTo(500, 500);
  setTimeout(() => {
    newWin.moveTo(200, 200);
    setTimeout(() => {
      newWin.close();
    }, 2000);
  }, 2000);
}, 2000);
//-----------------------------------------------------------\\

//************************** Task_2 *************************\\
document.getElementById("changeStyle").onclick = changeCSS;

function changeCSS() {
    const text = document.getElementById('text');
    text.style.color = "orange";
    text.style.fontSize = "20px";
    text.style.fontStyle = "Comic Sans MS";
}
//-----------------------------------------------------------\\

//************************** Task_3 *************************\\
document.getElementById('blueColor').addEventListener("click", () => document.body.style.backgroundColor = 'aqua');
document.getElementById('pinkColor').addEventListener("dblclick", () => document.body.style.backgroundColor = 'pink');
document.getElementById('brownColor').addEventListener("mousedown", () => document.body.style.backgroundColor = 'brown');
document.getElementById('brownColor').addEventListener("mouseup", () => document.body.style.backgroundColor = 'white');
document.getElementById('yellowColor').addEventListener("mouseover", () => document.body.style.backgroundColor = 'yellow');
document.getElementById('yellowColor').addEventListener("mouseout", () => document.body.style.backgroundColor = 'white');

//-----------------------------------------------------------\\

//************************** Task_4 *************************\\
let currentName = document.getElementById('listOfName');
document.getElementById('chooseAndDelete').addEventListener("click", () => currentName.remove(currentName.options.selectedIndex));


//-----------------------------------------------------------\\

//************************** Task_5 *************************\\
let LiveButton = document.getElementById('changeLiveButton');

function whenClick() {
    changeLiveButton.insertAdjacentHTML("afterend", "<p> I was pressed!</p>");
};

function whenMouseOver() {
    LiveButton.insertAdjacentHTML('afterend', '<p> Mouse on me!</p>');
};

function whenMouseOut() {
    LiveButton.insertAdjacentHTML('afterend', '<p> Mouse is not on me!');
};

LiveButton.addEventListener('click', whenClick);
LiveButton.addEventListener('mouseover', whenMouseOver);
LiveButton.addEventListener('mouseout', whenMouseOut);
//-----------------------------------------------------------\\

//************************** Task_6 *************************\\
function currentScrennSize () {

    let currentHeight = window.innerHeight; 
    let currentWidth = window.innerWidth;
    
    document.getElementById('currentWidthAndHeight').innerHTML = "Height: " + currentHeight + ", Width: " + currentWidth; 
};

window.addEventListener('resize', currentScrennSize);

//-----------------------------------------------------------\\

//************************** Task_7 *************************\\

let listOfCountry = document.getElementById('country');
let listOfCity = document.getElementById('cities');
let listOfCities = {
    ger: ["Berlin", "Hamburg", "Frankfurt", "Cologne"],
    ukr: ["Kyiv", "Lviv", "Odesa", "Vinnytsia"],
    usa: ["Boston", "New York", "Las Vegas", "Chikago"]
};

function CitiesInCountry() {
    let countryName = listOfCountry.value;
    listOfCity.innerText = "";
    for (let i = 0; i < listOfCities[countryName].length; i++) {
        let addCity = document.createElement("option");
        addCity.textContent = listOfCities[countryName][i];
        listOfCity.appendChild(addCity);
    };
};

function CountryAndCity() {
    document.getElementsByTagName('p')[6].innerHTML = listOfCountry.options[listOfCountry.selectedIndex].text + ", " + listOfCity.options[listOfCity.selectedIndex].text;
}

listOfCountry.addEventListener('change', CitiesInCountry);
window.addEventListener('change', CountryAndCity);
//-----------------------------------------------------------\\