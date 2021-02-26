var body = document.body
var daynight = document.querySelectorAll("span")
var word = document.getElementById("word")
var time = document.getElementById("time")
var hello = document.getElementById("hello")
var i = 0 ;

function nichtmode() {

    if (i == 0 ) {

        for (let index = 0; index < daynight.length; index++) {
            daynight[index].innerHTML = "day";
        }
        time.innerHTML = "night";
        hello.innerHTML = "NIGHT";
        
        body.classList.add("nightmode")

        word.classList.remove("wordday")
        word.classList.add("wordniht")        

        i = 1;  
    } else {
        
         for (let index = 0; index < daynight.length; index++) {
            daynight[index].innerHTML = "night";
        }
        body.classList.remove("nightmode")
        time.innerHTML = "MORING";

        word.classList.remove("wordniht")
        word.classList.add("wordday")

        daynight.innerHTML = "night";
        time.innerHTML = "day";

        i = 0;
    }
}