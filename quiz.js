let questionNumber = 0; //tracks which question number the user is on
let questions = [] //the array that will contain the questions

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
        for(let i = 0; i < 3; i++)
        {
            answerField[i].innerText = this.answers[i];
        }

    }


}

defineQuestions() //creates the questions in the array
questions[0].display //displays the first question

function submitBtn()
{
    score();
    questionNumber+=1;
    questions[questionNumber].display();
}

function selectAnswer(item)
{
    //highlights the answer selected


}

function score()
{

}


function defineQuestions()
{
    //create the questions here
    //keep this function at the end for readability
    questions.push(new Question("How many throws did Ethan make?", 1000, 20, 0, 5, 2));
}