let btn = document.getElementById("btn");

function firstFunction(e) {
    e.preventDefault();
    btn.innerHTML = "I love you"
}

function secondFunction() {
    btn.style.background = "red";
}

btn.addEventListener("click", firstFunction);
btn.addEventListener("click", secondFunction);



var field = document.querySelector('textareas');

field.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
}