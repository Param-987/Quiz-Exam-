import question from "./Question";

var x=0;
var q=0;
let a=0;
var eve;
function jobstart(){
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#div1").classList.remove("hide");
    
}

function clock(){
    if(x==15){
        document.getElementsByClassName("next")[q].style.display="inline";
        clearInterval(eve); 
    } 
    else {
    x++;
    document.getElementsByClassName("clock")[q].innerText=x; }
}
// function 

function cont(){
    document.getElementById("div1").classList.add("hide");
    document.getElementById("Q1").classList.remove("hide");
    eve=setInterval(clock,1000);
    x=0;
    
}
function next(n){
    clearInterval(eve); 
    eve=setInterval(clock,1000);
    document.getElementsByClassName("Ques")[n].classList.add("hide");
    document.getElementsByClassName("Ques")[n+1].classList.remove("hide");
    q+=1;
    x=0;
}
function Final(){
    document.getElementById("spa").innerHTML=(5-a);
    console.log(a);
    document.getElementsByClassName("Ques")[4].classList.add("hide");
    document.querySelector("#score").classList.remove("hide");
}

function wans(n,m){
    a++;
    var obj=document.getElementsByClassName("wa")[3*n+m];
    obj.setAttribute("style", " background-color:red; color:white;");
    ans(n);   
}
function ans(n){
    document.getElementsByClassName("next")[n].style.display="inline";
    var obj=document.getElementsByClassName("ans")[n];
    obj.setAttribute("style", " background-color: green; color:white;");
}
function back(){
    document.querySelector("#score").classList.add("hide");
    document.querySelector("#start").classList.remove("hide");
}

