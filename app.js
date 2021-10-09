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