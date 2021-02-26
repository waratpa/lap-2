var n1 = document.querySelectorAll('h1')

for (let index = 0; index < n1.length; index++) {
    n1[index].addEventListener('click',addhead)
}

function addhead() {
    n1[0].innerHTML = "NOOOOOOO~~";
}

function button0() {
    var v1 = event.currentTarget;
    alert(v1.innerText +" said: nope")
}
