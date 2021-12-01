import Question from './Question.js'
let num = Question.length;
var x=0;
let score= 0
var q=0;
let a=0;
var eve;
let selectedOptions = []


document.querySelector('#start').addEventListener('click',()=>{
    document.querySelector('#start').style.display = 'none'
    document.querySelector("#div1").classList.remove("hide");
    
})

function display(p){
    document.getElementById("qno").innerHTML = `Question ${p+1} of ${num}`
    const {Ques,ans,...opt} = Question[p];
    document.querySelector('#Question').innerHTML =Ques
    
    document.querySelector('#anime').classList.add("animation");
    const options = [opt.Option1,opt.Option2,opt.Option3,opt.Option4] 
    for(let j = 0;j<4;j++)
    document.getElementsByClassName('option')[j].innerHTML =options[j];
    let Options = document.querySelectorAll('.option')
    let pia = false;
     Options.forEach( element => {
         element.addEventListener('click',()=>{
            document.querySelector('#anime').classList.remove("animation");
             if(pia && x<15) return false ;
             if(x==15) return false;
             selectedOptions.push(element.getAttribute("id"))
             element.style.cssText="background-color:blue;color:white";
             clearInterval(eve);
             if(element.getAttribute("id") == ans)  score+=4; 
             else score--;
             if(selectedOptions.length == num) document.getElementById("next").innerHTML ='Submit'
             document.getElementById("next").style.display="inline";
             pia = true;

         })
        })
}

function clock(){
    if(x==15){
        document.querySelector('#anime').classList.remove("animation");
        selectedOptions.push(-1);
        if(selectedOptions.length == num) document.getElementById("next").innerHTML ='Submit'
        document.getElementById("next").style.display="inline";
        clearInterval(eve); 
    } 
    else {
    x++;
    document.getElementsByClassName("clock")[q].innerText=x; }
}


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
    if(selectedOptions.length !=Question.length) { display(selectedOptions.length); }
    else{
        clearInterval(eve);
        document.querySelector("#Q1").classList.add("hide");
        review();

    }
})





document.querySelector('#exit').addEventListener('click',()=>{
    
    document.querySelector('#div1').classList.add("hide")
    document.querySelector('#start').removeAttribute("style");
})

function review(){
    let str = `<h2 style="text-align:center">Awesome Quiz Application</h2>`;

    for(let x of Question){
        str+= `
        <div class="OptionsDisplay">
        <h3>${x.Ques}</h3>
        <ul style="list-style-type: none; line-height:30px;">
        <li class="opt">${x.Option1}</li>
        <li class="opt">${x.Option2}</li>
        <li class="opt">${x.Option3}</li>
        <li class="opt">${x.Option4}</li>
    </ul>
        <p>Hint:${x.desc}</p>

        </div>
        <br>
        `
    }
    score < 0? score = 0 :null;
    str+=`<div class="Quit"><h3>Marks Scored is ${score}</h3><button class="exit" onclick="gotobeg()">EXIT</button></div>`
    document.querySelector('.last').innerHTML = str;
    markdown()
    document.querySelector('.last').classList.remove("hide");
    console.log(score);
    selectedOptions = [];
    score = 0;
}

function markdown(){

    let i = 0,m=0;
    let y =  document.querySelectorAll('.opt');
    for(let x of Question){
        if(x.ans == selectedOptions[i]) m='+4';
        else if(selectedOptions[i]== -1) m = 0;
        else m=-1;
        y[4*i+x.ans.charCodeAt(0)-97].style.backgroundColor = '#9AE66E'
        if(x.ans != selectedOptions[i] && selectedOptions[i]!=-1){
            y[4*i+selectedOptions[i].charCodeAt(0)-97].style.backgroundColor = '#AE4CCF'
        }
        if(selectedOptions[i]!=-1) y[4*i+selectedOptions[i].charCodeAt(0)-97].innerHTML +=`<span class="sel">selected (mark:${m})</span>`
        i++;

    }
}


