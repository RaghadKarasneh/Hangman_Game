'use strict';

let letters=[
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j','k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't','u', 'v', 'w', 'x',
    'y', 'z'
];

let topic; //for topics
let selected; // the selected topic
let hint; // to get hints
let word;
let guess;
let array=[]; //to store guess
let lives;
let counter;
let space; //number of spaces in each word
let showLives=document.getElementById('livesNum');
let selectTopic=document.getElementById('selectTopic');
let getHint=document.getElementById('hint');
let showSpac=document.getElementById('space');
let myButtons= document.getElementById('buttons');

//To choose the topic that the game will be about
function selectTopicFun(){
    if (selected===topic[0]){
        selectTopic.innerHTML='Football';
    }else if(selected==topic[1]){
        selectTopic.innerHTML='Movies';
    }
    else if(selected==topic[2]){
        selectTopic.innerHTML='Cities';
    }
}

//The result function
function result(){
    let wordHolder=document.getElementById('hold');
    let correct=document.createElement('ul');
    for (let i=0;i<word.length;i++){
        correct.setAttribute('id','my-word');
        guess=document.createElement('li');
        guess.setAttribute('class','guess');
        if(word[i]==='-'){
            guess.innerHTML='-';
            space=1;
        }
        else{
            guess.innerHTML='_';
            array.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
}

//Lives Numver

function comments(){
    showLives.innerHTML='You have '+ lives+ 'lives';
    if(lives<1){
        showLives.innerHTML='Game Over';
    }
    else{
        for(let i=0;i<array.length;i++){
            if(counter + space === array.length){
                showLives.innerHTML='Congrats, you win ^^';
            }
        }
    }
}
//11:50