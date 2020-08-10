const img = [
  "noteimg/g.png",
  "noteimg/a.png",
  "noteimg/b.png",
  "noteimg/c.png",
  "noteimg/d.png",
  "noteimg/e.png",
  "noteimg/f.png",
  "noteimg/g2.png",
  "noteimg/a2.png"];

const notenames = 'G A B C D E F G A'.split(" ");
let streak = 0;
let totalGuesses = 1;
let correctAnswers = 0;


function randomNote() {
  //Generates a random index to select from array of note pngs
   randomIndex = Math.floor(Math.random() * img.length);
   return img[randomIndex];
}

function newNote(){
  //Display new note on webpage
  note.setAttribute('src',randomNote());
}

const clef = document.getElementById('clef');
clef.setAttribute('src','noteimg/bassclef.png');
const note = document.getElementById('note');
note.setAttribute('src',randomNote());

function checkAnswer(){
  //Checks user's answer returns boolean 'correct' AND displays results
  if( document.querySelector('P') ){
    //Remove previous guess if it exists
    document.querySelector('P').remove();
  }
  if( document.querySelector('#streakbox')){
    document.querySelector('#streakbox').remove();
  }
  var userInput = document.getElementById('userInput').value;

  if(userInput.toUpperCase() === notenames[randomIndex])
  {
    var correct = true;
    streak += 1;
    displayResult(correct);
    newNote();
    correctAnswers += 1;
  }
  else {
    var correct = false;
    streak = 0;
    displayResult(correct);
  }
  document.getElementById('playerStats').style.display = "grid";
  displayStreak();
  displayScore();
  totalGuesses += 1;
  console.log(correct);
}
function displayResult(correct){
  //Displays the result after user guesses displays as a <p> element below guessbox
  let showResult = document.createElement("P");
  if(correct === true)
  {
    showResult.innerText="You are correct!";
  }
  else{
    showResult.innerText="You are incorrect. Try again";
  }
  document.getElementById('notice').appendChild(showResult);
  document.getElementById('userInput').value=''; //Clear input box
}

let display = (description,value) => {
    let d = document.createElement('div');
    d.setAttribute("id",description);
    let t = document.createElement("div");
    t.innerText = description + ": ";
    d.appendChild(t);
    let v = document.createElement("div");
    v.innerText = value;
    d.appendChild(v);
    document.getElementById('playerStats').appendChild(d);
}

function displayStreak(){
  let x = document.getElementById('streakValue');
  x.innerText = streak.toString();
}
function displayScore(){
    let x = document.getElementById('scoreValue');
    x.innerText = correctAnswers.toString() + "/" + totalGuesses.toString();
}


button = document.getElementById('btn');
button.addEventListener('click',function(){
  checkAnswer();
})

guessbox = document.getElementById('userInput');
guessbox.addEventListener('keydown',function(e){
  if(e.keyCode === 13){
    checkAnswer();
  }
});
