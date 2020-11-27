var suits = ["♠", "♥", "♣", "♦"];
var type = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var count = Math.floor((Math.random() * 4) + 0);
var tycount = Math.floor((Math.random() * 13) + 0);
var count2 = Math.floor((Math.random() * 4) + 0);
var tycount2 = Math.floor((Math.random() * 13) + 0);
var count3 = Math.floor((Math.random() * 4) + 0);
var tycount3 = Math.floor((Math.random() * 13) + 0);
let border = document.createElement('div');
border.setAttribute('id', `game-table`); 
border.innerHTML = `<div class="card-table">
<div id="card"><h1 id="card-num">` + type[tycount]+ suits[count] + `</h1><h1 id="card-suit">` + suits[count] + `</h1></div>
<div id="card2"><h1 id="card-num2">` + type[tycount2]+ suits[count2] + `</h1><h1 id="card-suit2">` + suits[count2] + `</h1></div>
<div id="card2"><h1 id="card-num3">` + type[tycount3]+ suits[count3] + `</h1><h1 id="card-suit3">` + suits[count3] + `</h1></div>
</div>`;

document.getElementById('body-box').appendChild(border);

if (suits[count] ===  "♥" || suits[count] ===  "♦") {
    document.getElementById('card-suit').style.color = "red";
    document.getElementById('card-num').style.color = "red";
} else {
    document.getElementById('card-suit').style.color = "black";
    document.getElementById('card-num').style.color = "black";
}
if (suits[count2] ===  "♥" || suits[count2] ===  "♦") {
    document.getElementById('card-suit2').style.color = "red";
    document.getElementById('card-num2').style.color = "red";
} else {
    document.getElementById('card-suit2').style.color = "black";
    document.getElementById('card-num2').style.color = "black";
}
if (suits[count3] ===  "♥" || suits[count3] ===  "♦") {
    document.getElementById('card-suit3').style.color = "red";
    document.getElementById('card-num3').style.color = "red";
} else {
    document.getElementById('card-suit3').style.color = "black";
    document.getElementById('card-num3').style.color = "black";
}
var scoretype = 0; 
if (type[tycount] === type[tycount2] || type[tycount] === type[tycount3] || type[tycount2] === type[tycount3]) {
    scoretype = 10;
    document.getElementById('game-score').innerHTML = scoretype;
} else {
    document.getElementById('game-score').innerHTML = scoretype;
}
if (type[tycount] === type[tycount2] && type[tycount2] === type[tycount3]) {
    scoretype = 100;
    document.getElementById('game-score').innerHTML = scoretype;
    if (type[tycount] === "J" && type[tycount2] === "J" && type[tycount3] == "J") {
        scoretype += 50;
        document.getElementById('game-score').innerHTML = scoretype;
        if (suits[count] === suits[count2] && suits[count2] === suits[count3]) {
            scoretype += 250;
            document.getElementById('game-score').innerHTML = scoretype;
        }
    } else if (type[tycount] === "Q" && type[tycount2] === "Q" && type[tycount3] == "Q") {
        scoretype += 100;
        document.getElementById('game-score').innerHTML = scoretype;
        if (suits[count] === suits[count2] && suits[count2] === suits[count3]) {
            scoretype += 300;
            document.getElementById('game-score').innerHTML = scoretype;
        }
    } else if (type[tycount] === "K" && type[tycount2] === "K" && type[tycount3] == "K") {
        scoretype += 150;
        document.getElementById('game-score').innerHTML = scoretype;
        if (suits[count] === suits[count2] && suits[count2] === suits[count3]) {
            scoretype += 350;
            document.getElementById('game-score').innerHTML = scoretype;
        }
    } else if (type[tycount] === "A" && type[tycount2] === "A" && type[tycount3] == "A") {
        scoretype += 400;
        document.getElementById('game-score').innerHTML = scoretype;
        if (suits[count] === suits[count2] && suits[count2] === suits[count3]) {
            scoretype += 500;
            document.getElementById('game-score').innerHTML = scoretype;
            if (suits[count] === "♠" && suits[count2] === "♠" && suits[count3] === "♠") {
                scoretype += 500;
                document.getElementById('game-score').innerHTML = scoretype;
            }
        }
    } 
} 

function colorChange() {

}