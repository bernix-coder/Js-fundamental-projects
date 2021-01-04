const quizData =[
    {
        question: "What determines the structure of a web page? ",
        a: 'CSS',
        b: 'JavaScript',
        c: 'Java',
        d: 'HTML',
        correct: 'd'
    },
    {
        question: "What makes a web page interactive? ",
        a: 'CSS',
        b: 'JavaScript',
        c: 'Java',
        d: 'HTML',
        correct: 'b'
    },
    {
        question: "What does HTML stands for? ",
        a: 'HyperTab Markup Language',
        b: 'HyperText Markup Language',
        c: 'HyperTab Makeup Language',
        d: 'HyperText Makeup Language',
        correct: 'b'
    },
    {
        question: "Which of the following gives style to a web page? ",
        a: 'CSS',
        b: 'JavaScript',
        c: 'Java',
        d: 'HTML',
        correct: 'a'
    },
    {
        question: "In which year was JavaScript launched? ",
        a: '1990',
        b: '1995',
        c: '1999',
        d: 'None',
        correct: 'b'
    }
    
]

const question = document.getElementById('question')
const a_option = document.getElementById('a_option')
const b_option = document.getElementById('b_option')
const c_option = document.getElementById('c_option')
const d_option = document.getElementById('d_option')
let currentQuiz = 0
const submitBtn = document.getElementById('submitBtn')
const a = document.getElementById('a')
const b = document.getElementById('b')
const c = document.getElementById('c')
const d = document.getElementById('d')

let score =0

loadQuiz()
function loadQuiz(){
    let currentQuizData =quizData[currentQuiz]
    question.innerText=currentQuizData.question
    a_option.innerText=currentQuizData.a
    b_option.innerText=currentQuizData.b
    c_option.innerText=currentQuizData.c
    d_option.innerText=currentQuizData.d
}

function getSelected(){
    const answerEls = document.querySelectorAll('answer')
    let answer = undefined;
    answerEls.forEach(answerEl =>{
       if(answerEl.checked){
          answer= answerEl.id
       }

    })
    return answer
}
   submitBtn.addEventListener("click", ()=>{
        currentQuiz++ ;
       const answer = getSelected()
       if(answer){
            if(answer === quizData[currentQuiz].correct){
                score ++
            }
        if(currentQuiz < quizData.length){

            loadQuiz()
        }
        else{
            alert('Quiz completed')
        }
    }
    })



