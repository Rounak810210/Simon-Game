
let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
if(started==false){
    console.log("game is started");
    started==true;

    levelup();
}
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);

}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let ranIdx=Math.floor(Math.random()*3);
let randColor=btns[ranIdx];
let ranBtn=document.querySelector(`.${randColor}`);
//console.log(ranIdx);
//console.log(randColor);
//console.log(ranBtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(ranBtn);

}

function checkAns(idx){
   // console.log("curr level: ", level);
   
   if(userSeq[idx] === gameSeq[idx]){
if(userSeq.length==gameSeq.length){
    setTimeout(levelup ,1000);
    
}
    
   } else {
    h2.innerHTML=`Game over! your score was <b> ${level} </b> <br>preess any key to start. `;
    document.querySelector("body").style.backgroundcolor="red";
    setTimeout(function(){
         document.querySelector("body").style.backgroundcolor="white";
    }, 150);
    reset();
   }
}

function btnPress(){
    console.log(this);
let btn=this;
userFlash(btn);

let usercolor= btn.getAttribute("id");
userSeq.push(usercolor);
checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started= false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
