let gameSequence= [];
let userSequence= [];

let btns= ["yellow", "red","blue", "purple"];
let started= false;
let level= 0;

let levelTitle= document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started== false){
        console.log("game started");
        started= true;
    }
    levelUp();
});

function gameflash(btn){
    btn.classList.add("flash")
   setTimeout(function(){
    btn.classList.remove("flash")
   },250)
}
function userflash(btn){
    btn.classList.add("user-flash")
   setTimeout(function(){
    btn.classList.remove("user-flash")
   },250)
}

function levelUp(){
    userSequence= [];
    level++;
    levelTitle.innerText= `Level ${level}`

    let randIdx= Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
    gameSequence.push(randColor)
    console.log(gameSequence)
    gameflash(randbtn)
}

function checkAns(idx){
    console.log("curr level:", level)
    if(userSequence[idx]== gameSequence[idx]){
        if(userSequence.length== gameSequence.length){
            setTimeout(levelUp, 1000)
        }
    } else{
        levelTitle.innerHTML=`game is over! Your score was <b>${level}</b>,press any key to start`
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        }, 150)
        reset()
    }
}

function btnPress(){
    let btn= this;
    userflash(btn)
    userColor= btn.getAttribute("id")
    userSequence.push(userColor)
    checkAns(userSequence.length-1)
}

let allbtn= document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started= false;
    gameSequence= [];
    userSequence= [];
    level =0;
}
