let btn = document.querySelectorAll(".box");
let rBtn = document.querySelector(".reset");
let newBt = document.querySelector(".again");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; //playerX
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetGame = () =>{
    turnO = true;
    count = 0;
    enablebtn();
    msgContainer.classList.add("hide");

}

//click functionality to display X or O
btn.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("the button was clicked");
        if (turnO) {//playerO
            box.innerText = "O"
            turnO = false;
        } else { //playerX
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner =checkWinner();

        if (count === 9 && !isWinner){
            gameDraw();
        }
        
    });
});

const gameDraw = () =>{
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disablebtn();
};

const disablebtn = () =>{
    for(let box of btn){
        box.disabled = true;
    }
};

const enablebtn = () =>{
    for(let retry of btn){
        retry.disabled = false;
        retry.innerText= "";
    }
};


// created a function showWinner passed a etxt through innerText and used 
//classList.remove("hide") to remove the hidden content in css
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
}

// to check for the Winner by looking at the pattern
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = btn[pattern[0]].innerText;
        let pos2 = btn[pattern[1]].innerText;
        let pos3 = btn[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);

                showWinner(pos1);
                return true;

            }
        }
    }
};


newBt.addEventListener("click", resetGame);
rBtn.addEventListener("click", resetGame);