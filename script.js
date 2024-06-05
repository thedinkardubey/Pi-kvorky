// My Logic

let boxes = document.getElementsByClassName('box');
let turn = "X";
let ting = new Audio('ting.mp3');
let isgameover = false;
let gameover = new Audio('gameover.mp3');
let check = false;
function changeturn() {
    return turn === "X" ? "0" : "X";
}
function checkwin() {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 1, 5, 0, 2, 10, 0],
        [3, 4, 5, 1, 15, 0,2,30,0],
        [6, 7, 8, 1, 25, 0,2,50,0],
        [0, 3, 6, -9, 15, 90,-18,30,90],
        [1, 4, 7, 1, 15, 90,2,30,90],
        [2, 5, 8, 11, 15, 90,22,30,90],
        [0, 4, 8, 1, 15, 45,2,30,45],
        [2, 4, 6, 1, 15, 135,2,30,135],
    ]
    win.forEach((e) => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            isgameover = true;
            document.getElementsByClassName('playerturn')[0].innerText = boxtext[e[0]].innerText + " Win the game";
            gameover.play();
            document.getElementsByTagName('img')[0].style.width = "200px";

            if (window.innerWidth > 950) {
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.getElementsByClassName('line')[0].style.width = "28vw";
            }
            else {
                document.querySelector('.line').style.transform = `translate(${e[6]}vw,${e[7]}vw) rotate(${e[8]}deg)`;
                document.getElementsByClassName('line')[0].style.width = "56vw";
            }
        }
    })
}

//main Logic
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            ting.play();
            checkwin();
            turn = changeturn();
            if (isgameover === false) {
                document.getElementsByClassName('playerturn')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//reset button
let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener("click", () => {
    document.getElementsByTagName('img')[0].style.width = "0px";
    for (let i = 0; i <= 8; i++) {
        document.getElementsByClassName('boxtext')[i].innerText = '';
    }
    turn = "X";
    document.getElementsByClassName('playerturn')[0].innerText = "Turn for " + turn;
    document.getElementsByClassName('line')[0].style.width = "0px";
    check = true;
});

