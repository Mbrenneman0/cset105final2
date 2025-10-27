let questionNumber = 0; //tracks which question number the user is on
let questions = [] //the array that will contain the questions
let score = 0;

let resetBtn = document.getElementById("reset")
let quizContainer = document.getElementById("quizContainer")
let resultsField = document.getElementById("resultsContainer")
let historyField = document.getElementById("history")
let questionField = document.getElementById("questionField");
let answerField =
    [  
        document.getElementById("question1"),
        document.getElementById("question2"),
        document.getElementById("question3"),
        document.getElementById("question4")
    ]


class Question
{
    constructor(question, answ1, answ2, answ3, answ4, correct)
    {
        this.question = question;
        this.answers = [answ1, answ2, answ3, answ4];
        this.correct = correct;
        this.userAnswer = null
    }

    display()
    {
        //sets the innerText of the question and each answer
        //also removes active from the previously selected answer
        questionField.innerText = `${questionNumber+1}.) ${this.question}`
        for(let i = 0; i <= 3; i++)
        {
            answerField[i].innerText = this.answers[i];
            answerField[i].className = "";
        }

    }


}

defineQuestions() //creates the questions in the array
questions[0].display() //displays the first question

function submitBtn()
{
    let answerSelected = false //temp value to check if an answer is selected
    for(let i = 0; i<=3; i++)
    {
        if(answerField[i].className === "active")
        {
            answerSelected = true;
        }
    }
    if(!answerSelected)
    {
        return; //escape the function and do nothing if no answer selected
    }


    calcScore();
    if (questions.length -1 <= questionNumber) {
        showResults();
    } else {
        questionNumber+=1;
        questions[questionNumber].display();
    }
}

function selectAnswer(item)
{
    //highlights the answer selected
    for(i = 0; i <= 3; i++)
    {
        if(item === answerField[i])
        {
            answerField[i].className = "active";
            questions[questionNumber].userAnswer = i;
        }
        else
        {
            answerField[i].className = "";
        }
    }

}

function calcScore() {
    if(questions[questionNumber].userAnswer === questions[questionNumber].correct) {
        score = score + 1
    }
}

function showResults() {
    quizContainer.style.display = "none"
    resultsField.style.display = "block"
    resultsField.className = "score"
    resultsField.innerHTML = `<p>Thank you for playing!</p><h2>Your Score: ${score}/${questions.length}</h2>`
    resetBtn.style.display = "block"
    historyField.innerHTML = generateHistoryHTML();
    historyField.style.display = "block"
}

function reset()
{
    score = 0
    questionNumber = 0
    quizContainer.style.display = "block";
    resultsField.style.display = "none";
    resetBtn.style.display = "none"
    historyField.style.display = "none"
    questions[0].display()
    for(i = 0; i < questions.length; i++)
    {
        questions[i].userAnswer = null;
    }
    
}

function generateHistoryHTML()
{
    let htmlString = "<h2>Results</h2>"
    for(i = 0; i<questions.length; i++)
    {
        let question = questions[i].question
        let correctAnswer = questions[i].answers[questions[i].correctAnswer]
        let userAnswer = questions[i].answers[questions[i].userAnswer]
        htmlString += `<p>${question}</p>`
        htmlString += `<p>Your Answer: ${userAnswer} Correct Answer: ${correctAnswer} Result: ${(userAnswer === correctAnswer) ? `Correct` : `Wrong`}</p>`
    }

    return htmlString;
}

function defineQuestions()
{
    //create the questions here
    //keep this function at the end for readability
    questions.push(new Question("How many shots did Ethan make into the trashcan?", 1000, 20, 0, 5, 2));
    questions.push(new Question("What is Mr. C's catchphrase?", "Do it now", "Don't do it now", "Collin is sleeping", "Hello Logan", 0));
    questions.push(new Question("How many gallons of iced tea did Rob bring for the class?", 10, 25, 2, 1, 2));
    questions.push(new Question("What is Mr C's least favorite coding language?", "Python", "HTML/CSS", "Javascript", "C++", 1));
    questions.push(new Question("How many tables are in room 12?", 10, 15, 13, 8, 2));
    questions.push(new Question("What styles are zeroed in the CSS Reset?", "margin, border, font-size", "padding & border", "none", "margin, padding, border", 3))
    questions.push(new Question("What does Mr. C drive?", "Subaru", "BMW", "Chevy", "Maserati", 0))
    questions.push(new Question("What does DOM stand for?", "Dirty Obsolete Modem", "Document Object Model", "Document Orientation Management", "Disk on Module", 1))
    questions.push(new Question("How long is is the curriculum for CSET 120?", "2 weeks","4 months","6 weeks", "7 days", 2))
    questions.push(new Question("According to Canvas, what CSET 105 classes were arrays taught in?", "Classes 8 & 9", "Classes 4 & 5", "Classes 5 & 6", "Classes 6 & 7", 3))
}