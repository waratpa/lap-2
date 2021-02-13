
var image = document.querySelectorAll('img');
var check;
var board = [ "", "", "", "", "", "", "", "", "" ];
var res = document.querySelector('button');
startListener();

//main function to play
function onclick(){
    this.src = "https://static.vecteezy.com/system/resources/thumbnails/001/192/548/small/x.png";
    this.className = "x";
    board[this.id] = this.className;
    wingame();
    if(endgame()){
        if(wingame()){
            wingame();
        }
        else{
            document.getElementById("end").innerHTML = "GameOver Draw!"
            unhidebutton(); 
        }
    }
    else{
        do{
            var o = Math.floor((Math.random() * 9));
        }while(image[o].className !== "free");
        image[o].src = "https://pngimg.com/uploads/letter_o/letter_o_PNG89.png";
        image[o].className = "o";
        board[image[o].id] = image[o].className;
        this.removeEventListener('click', onclick);
        image[o].removeEventListener('click', onclick);
        wingame();
    }
}

// check for draw game
function endgame(){
    check = document.querySelectorAll('img');
    for(let i=0;i<check.length;i++){
        if(check[i].classList.contains('free')){
            return false;
        }
    }
    return true;
}
// clear eventlistener after endgame
function clearListener(){
    for(let i=0;i<image.length;i++){
        if(image[i].classList.contains('free')){
            image[i].removeEventListener('click', onclick);
        }
    }
}
// start eventlistener
function startListener(){
    for(let i=0;i<image.length;i++){
        image[i].addEventListener('click', onclick);
    }
}
// function to restart the game
function restart(){
    for(let i=0;i<image.length;i++){
        image[i].src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F05%2Fblue0517.jpg&q=85";
        image[i].className = "free";
    }
    board = [ "", "", "", "", "", "", "", "", "" ];
    let reset = document.getElementById("reset");
    reset.style.display = "none";
    startListener();
    document.getElementById("end").innerHTML = " ";
    startListener();
}
// apply the restart button after game end
function unhidebutton(){
    let reset = document.getElementById("reset");
    reset.style.display = "inline-block";
}

// check for win the game with pattern
function wingame(){
    
    if(board[0] === "x" && board[1] === "x" && board[2] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[0] === "o" && board[1] === "o" && board[2] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[3] === "x" && board[4] === "x" && board[5] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[3] === "o" && board[4] === "o" && board[5] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[6] === "x" && board[7] === "x" && board[8] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[6] === "o" && board[7] === "o" && board[8] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[0] === "x" && board[3] === "x" && board[6] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[0] === "o" && board[3] === "o" && board[6] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[1] === "x" && board[4] === "x" && board[7] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener();
        unhidebutton();
        return true; 
    }
    else if(board[1] === "o" && board[4] === "o" && board[7] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[2] === "x" && board[5] === "x" && board[8] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[2] === "o" && board[5] === "o" && board[8] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[0] === "x" && board[4] === "x" && board[8] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[0] === "o" && board[4] === "o" && board[8] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
    else if(board[2] === "x" && board[4] === "x" && board[6] === "x"){
        document.getElementById("end").innerHTML = "GameOver X Win";
        clearListener(); 
        unhidebutton();
        return true;
    }
    else if(board[2] === "o" && board[4] === "o" && board[6] === "o"){
        document.getElementById("end").innerHTML = "GameOver O Win";
        clearListener();
        unhidebutton();
        return true;
    }
}


