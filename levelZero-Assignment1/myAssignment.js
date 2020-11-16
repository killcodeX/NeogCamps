var readlineSync = require("readline-sync");
var chalk = require("chalk");
var emoji = require('node-emoji');

// introduction
console.log(chalk.yellowBright.bold('Hello Shinobi !! Welcome to Naruto Trivia' + emoji.get("shinto_shrine")))

console.log()
console.log()

var userName = readlineSync.question('Enter your Ninja name ' + emoji.get("u7121") + '    ');

console.log()

console.log('Konnichiwa ' + userName + ' kun ' + emoji.get("smile") + '  !!' )

console.log()

console.log(chalk.greenBright('There are total 10 questions related to Naruto Series, Let see do you pass this chunin test Or not ') + emoji.get("exclamation") + emoji.get("question"))

console.log()

// data

var score = 0;
var questions = [
  {
    id: 1,
    question : 'Whom did Kakashi get his eye from ?',
    answer : 'Obito',
    options : ['Sasuke', 'Madara', 'Obito', 'Rin'],
    rightAnswerIndex : 2
  },
  {
    id: 2,
    question : 'How many answers did Naruto answer correctly in the first phase of the chunin exam ?',
    answer : 'Zero',
    options : ['One', 'Five', 'Tweleve', 'Zero'],
    rightAnswerIndex : 3
  },
  {
    id: 3,
    question : "What's Naruto's mum's name ?",
    answer : 'Kushina',
    options : ['Kushina', 'Kurama', 'Haruno', 'Carol'],
    rightAnswerIndex : 0
  },
  {
    id: 4,
    question : 'How many tails does Kurama have ?',
    answer : 'Nine',
    options : ['Seven', 'Three', 'Nine', 'Depends on anger or mood'],
    rightAnswerIndex : 2
  },
  {
    id: 5,
    question : 'What team is Kakashi the leader of ?',
    answer : 'Team 7',
    options : ['Team Kakashi', 'Taka', 'Team Rocket', 'Team 7'],
    rightAnswerIndex : 3
  },
];

var HighestScore = {
  name : 'N/A',
  score : 0
}

// function
function quiz(data){
  console.log()
  console.log(data.question)
  data.options.map((option, index) => {
    console.log(`${index+1}. ${option}`)
  })
  var userAnswer = parseInt(readlineSync.question('Enter correct option : '));

  if(userAnswer == (data.rightAnswerIndex + 1)){
    console.log()
    console.log(chalk.bgRedBright('Supper!, You are ' + (10 - data.id) + ' step away from becoming a Shinobi ') + emoji.get("six_pointed_star"))
    score = score + 1;
  }else{
    console.log()
    console.log('correct answer is : ', data.answer)
    console.log(chalk.redBright('Lets use secret jutsu and win next round ') + emoji.get("right-facing_fist"))
  }
  console.log()
  console.log(chalk.greenBright('--------------'))
  console.log('Current Score : ', chalk.yellowBright(score))
  console.log(chalk.greenBright('--------------'))
  console.log()
  console.log('-----------------------------------')
}




// start of program
var start = readlineSync.question('Do you wanna start ? Enter y or n : ');

if(start == 'y'){
  console.log()
  console.log('-----------------------------------------------------------')
  console.log()
  questions.map(data  => quiz(data))
  console.log()
  console.log('-----------------------------------------------------------')
  console.log()
  if(score >= 7){
      console.log('Congartulation You are a proud Shinobi')
    }else if(score <= 4){
      console.log()
      console.log('Sadly you didnt passed chunin exam but dont give up because thats the Ninja way!! ')
    }
  
  console.log()
  if(score > HighestScore.score){
    HighestScore.name = userName;
    HighestScore.score = score;
  }

  console.log(chalk.greenBright('Highest Score Shinobi is : ') + chalk.yellowBright(HighestScore.name))
  console.log(chalk.greenBright('Highest Score is : ') + chalk.yellowBright(HighestScore.score))

} else if (start == 'n'){
  console.log()
  console.log(chalk.cyanBright('You’re wrong, that’s not what makes a shinobi. You never did get it, a real ninja is one who endures no matter what gets thrown at him… Let me explain something to you, there is only one thing that matters if you are a shinobi, and it isn’t the number of jutsu you possess. All you need is the guts to never give up ') + emoji.get("yin_yang"))
} else {
  console.log()
  console.log(chalk.red('Bagga !! Bagga !! Wrong Input ') + emoji.get("anger"))
}