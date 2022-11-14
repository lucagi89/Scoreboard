

let homeScore = 0;
let guestScore = 0;
let homeDisplay = document.getElementById("home-score");
let guestDisplay = document.getElementById("guest-score");

homeDisplay.textContent = 0;
guestDisplay.textContent = 0;


function homeOne(){
    homeScore += 1;
    homeDisplay.textContent = homeScore;
}
function homeTwo(){
    homeScore += 2;
    homeDisplay.textContent = homeScore;
}
function homeThree(){
    homeScore += 3;
    homeDisplay.textContent = homeScore;
}

function guestOne(){
    guestScore += 1;
    guestDisplay.textContent = guestScore;
}
function guestTwo(){
    guestScore += 2;
    guestDisplay.textContent = guestScore;
}
function guestThree(){
    guestScore += 3;
    guestDisplay.textContent = guestScore;
}



function newMatch(){
    homeScore = 0;
    guestScore = 0;
    homeDisplay.textContent = 0;
    guestDisplay.textContent = 0;
}

