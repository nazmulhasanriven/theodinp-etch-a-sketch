let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(64);
    document.querySelector('#board').addEventListener("click", function(){
        click = !click;
    })
});

function createBoard(deepth) {
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${deepth}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${deepth}, 1fr)`;
    let totalDivs = deepth * deepth;
    for (i=0;i<totalDivs;i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        div.addEventListener ("mouseover", divColor);
        board.insertAdjacentElement("beforeend", div);
    }
}

function theColor(givencolor) {
    color = givencolor;
}

function divColor() {
    if (click == true) {
        if (color == 'black') {
            this.style.backgroundColor = "black";
        } else if (color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = "aqua";
        }
    }
}

function customSize() {
    let size = prompt("How many pixels do you want?");
    if (size>1 && size<101) {
        reset();
        createBoard(size);
    } else {
        alert("Please provide a number between 2 - 100");
    }
}

function reset() {
    let div = document.getElementById('board').querySelectorAll('div');
    div.forEach ((div) => div.style.backgroundColor = "white");
    click = false;
}
