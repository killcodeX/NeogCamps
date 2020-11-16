var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name ? ");

console.log("Welcome " + userName + " to 'Do You Know Tanay?'" );

var score = 0;

var HighestScore = 
  {
    name: 'Tanay',
    score : 3
  }


// play function
function play (question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() == answer.toLowerCase()){
    console.log('Right :)')
    score = score + 1;
  } else {
    console.log('Wrong :/')
  }

  console.log('Current Score : ', score);
  console.log('-------------------------------')

}

var questions = [
  {
    question : 'Where do I live ? ',
    answer : 'Bangalore'
  },
   {
    question : 'My Favorite super hero would be ? ',
    answer : 'Dhurv'
  },
   {
    question : 'Where do I work ? ',
    answer : 'Microsoft'
  },
];

for(var i = 0; i < questions.length; i++){
  var current = questions[i];
  play(current.question, current.answer)
}

console.log('YAY your score :', score)

if(score >= HighestScore.score){

  console.log('Congratulations for highest Score !!');
  HighestScore.name = userName;
  HighestScore.score = score;
}