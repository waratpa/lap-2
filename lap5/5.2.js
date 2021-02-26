var input = document.querySelector('input')
input.addEventListener('keyup',addlist)

function addlist() {
    if (event.key === 'Enter') {
       var li = document.createElement("li");
    var inputValue = document.getElementById("newinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    document.getElementById("UL").appendChild(li);
    document.getElementById("newinput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
    
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('addline');
  }
}, false);
