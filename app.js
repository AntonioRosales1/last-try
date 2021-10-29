let btn = document.getElementById("btn");

function firstFunction(e) {
    e.preventDefault();
    btn.innerHTML = "Hey! Whats up!!!!"
   
}

function secondFunction() {
    btn.style.background = "yellow";
    
}

btn.addEventListener("click", firstFunction);
btn.addEventListener("click", secondFunction);



var field = document.querySelector('textArea');

var backUp = field.getAttribute('placeholder');
var btnOne = document.querySelector('.btnOne');
var clear = document.getElementById('clear');

field.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block';
}

field.onblur = function(){
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = '#aaa';
}

clear.onclick = function(){
    btn.style.display = 'none';
    field.value = '';
}