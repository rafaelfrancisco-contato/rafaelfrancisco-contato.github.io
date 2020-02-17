/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world'!;*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'imagens/firefox-icon.png'){
        myImage.setAttribute('src','imagens/firefox-icon2.png');   
    } else {
        myImage.setAttribute('src','imagens/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is cool, ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

