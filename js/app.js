'use strict';

let movies=['harry_potter',`alice_in_wonderland`, 'the_conjuring','the_invisible_man','me_before_you','independence_day'];
let hints = [
'A series of seven fantasy novels written by British author J. K. Rowling, which novels chronicle the lives of a young wizard ',
'A young girl falls through a rabbit hole into a fantasy world of anthropomorphic creatures',
'When a family starts experiencing supernatural terrors, they seek the help of a pair of noted demonologists.',
'A woman believes she is being stalked and gaslit by her abusive and wealthy boyfriend even after his apparent suicide, and ultimately deduces that he has acquired the ability to become invisible.',
`A girl takes the best available job in her small town: care worker for a quadriplegic man. The man is a former London businessman who has been seriously injured in an accident.`,
`With the other people of the world, they launch a last-ditch counterattack on July 4- Day in the United States.  The United Nations has collaborated to form Earth Space Defense (ESD), an international military defense and research organization.`];

let answer = '';

let mistakes = -1;
let guessed = [];
let i;
let wordStatus = null;

function randomWord() {
  i=Math.floor(Math.random() * movies.length)
  answer = movies[i];
}

function generateButtons() {
  let buttonsHTML = `abcdefghijklmnopqrstuvwxyz_`.split('').map(letter =>
    `
      <button
        class="btn col-lg-1 col-md-2 col-sm-3 buttonStyle"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === 6) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  if(mistakes==6){
    document.getElementById('mistakes').innerHTML = ` Wrong Answers: ${mistakes+1} ` ;
  }
  else
  document.getElementById('mistakes').innerHTML = ` Wrong Answers: ${mistakes+1} of 6`;
}

function reset() {
  mistakes = -1;
  guessed = [];
  document.getElementById('hangmanPic').src = '';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  document.getElementById('hint').innerHTML='';
}
function hint(){
  document.getElementById('hint').innerHTML=hints[i];
}


randomWord();
generateButtons();
guessedWord();