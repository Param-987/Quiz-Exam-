import Hello from './script1.js'
import Question from './Question.js'
let val = Hello();
console.log(val);

document.querySelector('button').addEventListener('click',()=>{
    document.querySelector('p').innerHTML = `${Question[0].Ques}`
})