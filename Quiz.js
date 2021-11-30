import Question from './Question.js'

let num = Question.length;
var x=0;
let score= 0
var q=0;
let a=0;
var eve;
let selectedOptons = []

document.querySelector('#start').addEventListener('click',()=>{
    document.querySelector('#start').style.display = 'none'
    document.querySelector("#div1").classList.remove("hide");
    
})

function display(p){
    document.getElementById("qno").innerHTML = `Question ${p+1} of ${num}`
    const {Ques,ans,...opt} = Question[p];
    document.querySelector('#Question').innerHTML =Ques

    const options = [opt.Option1,opt.Option2,opt.Option3,opt.Option4] 
    for(let j = 0;j<4;j++)
    document.getElementsByClassName('option')[j].innerHTML =options[j];
    let Options = document.querySelectorAll('.option')
    let pia = false;
     Options.forEach( element => {
         element.addEventListener('click',()=>{
             if(pia && x<15) return false ;
             selectedOptons.push(element.getAttribute("id"))
             if(element.getAttribute("id") == ans) { element.style.backgroundColor = "green";   score++;
            }
             else {
                 element.style.backgroundColor = "red"
                 document.querySelector(`#${ans}`).style.backgroundColor = "green"
             }
             document.getElementById("next").style.display="inline";
             pia = true;

         })
         
        })
}

function clock(){
    if(x==15){
        document.getElementById("next").style.display="inline";

        // document.querySelectorAll('.option').forEach(element=>{
        //     // element.
        //     if(ans == element.getAttribute("id")) element.style.backgroundColor = "green";
        // })
        clearInterval(eve); 
    } 
    else {
    x++;
    document.getElementsByClassName("clock")[q].innerText=x; }
}
// function 

document.querySelector('#continue').addEventListener('click',()=>{
    document.getElementById("div1").classList.add("hide");
    document.getElementById("Q1").classList.remove("hide");
    display(0);
    eve=setInterval(clock,1000);
    x=0;  
})

document.querySelector('#next').addEventListener('click',()=>{
    clearInterval(eve); 
    document.querySelectorAll('.option').forEach(element => element.removeAttribute("style"))
    document.getElementById("next").style.display="none";
    document.getElementsByClassName("clock")[q].innerText=0;
    eve=setInterval(clock,1000);
    x=0;
    if(selectedOptons.length !=Question.length) display(selectedOptons.length);
    else{
        document.getElementById("spa").innerHTML = `${score} out of ${num}`;
        document.querySelector("#Q1").classList.add("hide");
        document.querySelector("#score").classList.remove("hide");
    }
})





function Final(){
    document.getElementById("spa").innerHTML=(5-a);
    console.log(a);
    document.getElementsByClassName("Ques")[4].classList.add("hide");
    document.querySelector("#score").classList.remove("hide");
}

document.querySelector('#finale2').addEventListener('click',()=>{
    document.querySelector("#score").classList.add("hide");
    document.querySelector('#start').removeAttribute("style");
})

document.querySelector('#exit').addEventListener('click',()=>{
    document.querySelector('#div1').classList.add("hide")
    document.querySelector('#start').removeAttribute("style");
})



