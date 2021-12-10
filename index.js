const prom=require("prompt-sync")()

var question_list=[{question:"what is Akshay is favorit City?",
answer:["A. Indore ","B. Mumbai","C. Delhi"]},
{question:"What is Akshay favorit food?",
answer:["A.Dal-Bati","B. Puri Sabzi","C. Razma-chaval"]},
{question:"What is Akshay favorit color?",
answer:["A. white","B. green","C. orange"]},
{question:"What is the thing that Akshay likes the most?",
answer:["A. gym","B. trevel","C. eating food"]}]


var answer_list=["A","A","C","B"]

var score=0;
var question_number=1
var user_name=prom("what is your name? : ")
console.log("welcom to the quiz game"+" "+user_name+" "+"lets play");

let play_game=(question_list,answer_list)=>{
    for(i in question_list){
        var current_question=question_list[i]
        console.log("your question"+""+"in your screen \n\n",question_number,current_question.question);
        for(j of current_question.answer){
            console.log(j);
        }
        var user_answer=prom("plese enter your answer :")
        if(user_answer.toUpperCase()===answer_list[i]){
            console.log("right");
            score++
        }else{
            console.log(question_number+"  answer is worng!");
        }
        console.log("current score is :",score);
        question_number++

    }
    console.log("congrats you SCORED: ",score);
}
play_game(question_list,answer_list)