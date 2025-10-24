let questionNumber = 0; //tracks which question number the user is on
let questions = [] //the array that will contain the questions
let score = 0;

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
    }

    display()
    {
        //sets the innerText of the question and each answer
        //also removes active from the previously selected answer
        questionField.innerText = this.question
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
    calcScore();
    questionNumber+=1;
    questions[questionNumber].display();
}

function selectAnswer(item)
{
    //highlights the answer selected
    for(i = 0; i <= 3; i++)
    {
        if(item === answerField[i])
        {
            answerField[i].className = "active";
        }
        else
        {
            answerField[i].className = "";
        }
    }

}

function calcScore() {
    for(let i = 0; i <= 3; i++) {
        if(answerField[i].className === "active") {
            if(i === questions[questionNumber].answer) {
                score += 1
            }
        }
    }
}


function defineQuestions()
{
    //create the questions here
    //keep this function at the end for readability
    questions.push(new Question("How many throws did Ethan make?", 1000, 20, 0, 5, 2));
    questions.push(new Question("What is Mr. C's catchphrase?", "Do it now", "Don't do it now", "Collin is sleeping", "Hello Logan", 0));
    questions.push(new Question("How many gallons of iced tea did Rob bring for the class?", 10, 25, 2, 1));
    questions.push(new Question("What is Mr C's least favorite coding language?", "Python", "HTML/CSS", "Javascript", "C++"));
}