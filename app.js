let gameSeq = [];
let userSeq= [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns= ["yellow","red","purple","green"];


document.addEventListener("keypress", function(){
    
    if(started == false){
    console.log("Game started");
    started = true;
    levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 4);
    let ranClr = btns[randIdx];
    gameSeq.push(ranClr);

    let randombtn = document.querySelector(`.${ranClr}`);

    btnFlash(randombtn);
}

function checkAns(idx){

    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }
    else{
        h2.innerHTML= `Game Over ! Your score was <b>${level} <b> <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor= "white";
        }
               , 150);
        reset();
    }
}

function btnPressed (){
    let btn = this;
    btnFlash(btn);

    userClr= btn.getAttribute("id");

    userSeq.push(userClr);
    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
