var suits = ["♠", "♥", "♣", "♦"];
var type = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var count = Math.floor((Math.random() * 4) + 0);
var tycount = Math.floor((Math.random() * 13) + 0);
let border = document.createElement('div');
border.setAttribute('id', `game-table`); 
border.innerHTML = `<div class="card-table">
<div id="card"><h1 id="card-num">` + type[tycount]+ suits[count] + `</h1><h1 id="card-suit">` + suits[count] + `</h1></div></div>`;

document.getElementById('body-box').appendChild(border);

if (suits[count] ===  "♥" || suits[count] ===  "♦") {
    document.getElementById('card-suit').style.color = "red";
    document.getElementById('card-num').style.color = "red";
} else {
    document.getElementById('card-suit').style.color = "black";
    document.getElementById('card-num').style.color = "black";
}