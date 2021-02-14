Image = document.querySelectorAll('img')
for (let index = 0; index < Image.length; index++) {
    Image[index].addEventListener('click',play);
}

var check = 9;
var game = ['','','','','','','','',''];

function deletel() {
    for (let index = 0; index < Image.length; index++) {
        Image[index].removeEventListener('click',play);
    }   
}

function play() {

this.src = "https://img2.thaipng.com/20180920/ose/kisspng-scalable-vector-graphics-computer-icons-portable-n-wrong-number-no-box-svg-png-icon-free-download-3-5ba375a3c97e33.8539279015374391398253.jpg";
this.className ='x';
check = check-1;
game[this.id] = 'x';
console.log(this.id);
console.log((game[this.id]));
this.removeEventListener('click',play);

win();


if (check > 0) {
do {
   var ran = Math.floor(Math.random() * 9);
} while (Image[ran].className !== "free");
Image[ran].src ="https://img2.thaipng.com/20180403/pse/kisspng-letter-o-alphabet-clip-art-a-ccedil-ai-5ac3cbac121d40.0823121415227811000742.jpg";
Image[ran].className = 'o'
check = check-1;
game[Image[ran].id] = 'o';
Image[ran].removeEventListener('click',play);

}

else{
    document.getElementById("end").innerHTML = "GameOver Draw!"
}
}

function win() {
    if (checkwin() == 1) {
    document.getElementById("end").innerHTML = "X WIN"
} else if (checkwin() == 2) {
    document.getElementById("end").innerHTML = "Y WIN"
}
}


function checkwin() {
    if(game[0] === 'x' && game[1] === 'x' && game[2] === 'x'){
    deletel();
    return 1;}
    else if(game[3] === 'x' && game[4] === 'x' && game[5] === 'x'){
        deletel();
        return 1;}
    else if(game[6] === 'x' && game[7] === 'x' && game[8] === 'x'){
        deletel();
        return 1;}
    else if(game[0] === 'x' && game[3] === 'x' && game[6] === 'x'){
        deletel();
        return 1;}
    else if(game[1] === 'x' && game[4] === 'x' && game[7] === 'x'){
        deletel();
        return 1;}
    else if(game[2] === 'x' && game[5] === 'x' && game[8] === 'x'){
        deletel();
        return 1;}
    else if(game[0] === 'x' && game[4] === 'x' && game[8] === 'x'){
        deletel();
        return 1;}
    else if(game[2] === 'x' && game[4] === 'x' && game[6] === 'x'){
        deletel();
        return 1;}

    else if(game[0] === 'o' && game[1] === 'o' && game[2] === 'o'){
        deletel();
        return 2;}        
    else if(game[3] === 'o' && game[4] === 'o' && game[5] === 'o'){
        deletel();
        return 2;}
    else if(game[6] === 'o' && game[7] === 'o' && game[8] === 'o'){
        deletel();
        return 2;}
    else if(game[0] === 'o' && game[3] === 'o' && game[6] === 'o'){
        deletel();
        return 2;}
    else if(game[1] === 'o' && game[4] === 'o' && game[7] === 'o'){
        deletel();
        return 2;}
    else if(game[2] === 'o' && game[5] === 'o' && game[8] === 'o'){
        deletel();
        return 2;}
    else if(game[0] === 'o' && game[4] === 'o' && game[8] === 'o'){
        deletel();
        return 2;}
    else if(game[2] === 'o' && game[4] === 'o' && game[6] === 'o'){
        deletel();
        return 2;}

}
