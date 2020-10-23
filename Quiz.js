// Usama Naeem Toor. 301353233. 30 July 2020


// Making the ground work for future variables to be used.
let question = document.querySelector('#questions');
let options = Array.from(document.querySelectorAll('.optiontext'));
let progressText = document.querySelector('#progressText');
let RightAnswer = true
let score = 0 
let questionNum = 0
let availableQuestions = []
let currentQuestion = {}

const max_questions = 5
const earnedscore = 1


// The various questions to be asked.
let questions = [
    {
        question: 'What is the Capital of Canada?',
        option1: 'Toronto',
        option2: 'Ottawa',
        option3: 'Vancouver',
        option4: 'Montreal',
        answer: 2,
    },
    {
        question:
            "When did Canada come into being?",
        option1: "1880",
        option2: "1965",
        option3: "1867",
        option4: "1824",
        answer: 3,
        
    },
    {
        question: "What is the National Sports of Canada?",
        option1: "Soccer",
        option2: "Rugby",
        option3: "Tennis",
        option4: "Ice Hockey",
        answer: 4,
    },
    {
        question: "Where is Lake Superior located in Canada?",
        option1: "British Columbia",
        option2: "Ontario",
        option3: "Yukon",
        option4: "Manitoba",
        answer: 2,
    }, {
        question: "With English, what is the official language of Canada?",
        option1: "Spanish",
        option2: "French",
        option3: "Mandarin",
        option4: "Latin",
        answer: 2,
    }

]






// I have tied space here to make it somewhat more clear. One more thing, I have a little bit of JS code on the next file as well, though this alone is nearly 55.








// This function focuses on getting the Questions every time the quiz begins or the question is answered, finishing off when the total max questions have been reached! This might arguably be the most important function as it renders various other aspects of the JS as well, such as the number of questions done as well.


function QuestionNew() {
    if(questionNum < max_questions) {
    

    //This allows for us to randomize the questions asked, like what is the Capital of Canada would not always be the first question asked now. So to present question and randomize it. Randomization could be done with the Math.random() function the said about. 

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

        
    //This here will work to bring in the different options for us, the four ones. Originally I had not used the loops, but due to requirements I had to do it like this so not the most appropriate way. 

    for (let j = 0; j < options.length; j++){
        option = options[j]
        let number = option.dataset['number']
        option.innerText = currentQuestion['option'+ number]
    }
    

    //This just increase the questionNum. So that the questionNum condition maybe utilized and the Question x of y statement.

    questionNum++
    
    //This works on the line of "Question 1 of 5" and increases it every I do a question.

    progressText.innerText = `Question ${questionNum} of ${max_questions}`
    
    //Function I learned from the internet, it allows me to remove the question from the given questions we have. This function is pretty efficient as it makes sure that the questions do not repeat. Very efficient!

    availableQuestions.splice(questionsIndex, 1)
    RightAnswer = true


// This else symbolizes the time when the quiz ends.

} else { 

        
        //This stores the value of the score that I scored so that I can use it later!
        localStorage.setItem('mostRecentScore', score)

        //Take me to the final page.
        return window.location.assign('End.html')


}}


// This function will be used on later.
function increaseScore(number) {
score +=number
}

   


// The main event listener function which allows me to click on the options provided, so that they maybe selected and used. I used this separately just to make it easy, though it became much harder.

    for (let i = 0; i < options.length; i++){
        options[i].addEventListener('click',RoW,false)}

// This function complements the one above me in the sense that whatever I select, this function perceives whether it is right or wrong, and adds score then respectively. This function is primarily designed to see whether the answer is right or not. I felt I could have done better, not the most efficient way. RoW means "right or wrong" 

function RoW(e) {
if(RightAnswer === 'true') {  
} else {
RightAnswer = false
let selectedoption = e.target
let selectedAnswer = selectedoption.dataset['number']

if (selectedAnswer == currentQuestion.answer) {
classToApply = "correct";} else {classToApply = "incorrect";}
    

// This function here is responsible for increasing the score every the Question answered is the write one. 
if(classToApply === 'correct') {
increaseScore(earnedscore)}


//When the question is done, it executes here to the next one.

QuestionNew() 
}}


// The main function of the game, the one which starts the game.

function BeginGame() {

    // Initializing everything, starting from zero is what is meant here.

    questionNum = 0
    score = 0

    // The availableQuestions function is something that I picked up from the internet, this seemed rather simple than creating longer version I had before. Efficiency basically.

    availableQuestions = [...questions]
    QuestionNew()
}


// Begin Quiz!
BeginGame()