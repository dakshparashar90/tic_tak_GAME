let music=new Audio("music.mp3");
let audioturn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3");
let turn = "X";
let over=false;
// let reset=document.querySelector("button");


const changetuen=()=>{
    return turn==="X"?"0":"X";
}


const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2],
    ]
        win.forEach(e=>{
                if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !==""))
                    {
                        document.querySelector(".info").innerText=boxtext[e[0]].innerText + " Won"
                        over=true
                        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
                    }
        })
    
}

//game logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
           turn= changetuen();
            audioturn.play();
            checkwin();
            if(!over){
            document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
            }
        }
    })
})

Reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText= ""
    });
    turn="X";
    over=false;
    document.getElementsByClassName("info")[0].innerText= "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0";

})