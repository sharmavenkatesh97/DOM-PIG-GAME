/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var roundScore,activePlayer,score,gamePlaying,count,sc,count1;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){

    var dice=Math.floor(Math.random() *6)+1;
    var d1=Math.floor(Math.random() *6)+1;
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    var diceDOM1=document.querySelector('.dice1');
    diceDOM1.style.display='block';
    diceDOM1.src='dice-'+d1+'.png';

    if (dice !==1 && d1!==1){
        if (dice===6){
            count++;
        }else{
            count=0;
        }
        if (d1===6){
            count1++;
        }else{
            count1=0;
        }
        if(count===2||count1===2){
            loseScore();
        }
        roundScore+=dice+d1;
        document.querySelector('#current-'+activePlayer).innerHTML='<strong><em>'+roundScore+'</em></strong>';
    }else{
        nextPlayer();

    }
   }


});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){

        score[activePlayer]+=roundScore;

        document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];

    if(score[activePlayer]>= sc){

        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;

    }else{
         nextPlayer();
    }
  }

});

document.querySelector('.btn-new').addEventListener('click',init);

function loseScore(){
    score[activePlayer]=0;
    roundScore=0;
    document.getElementById('score-'+activePlayer).textContent='0';
    document.getElementById('current-'+activePlayer).textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
}


function init(){
   score=[0,0];
activePlayer=0;
roundScore=0;
   gamePlaying=true;
    sc=prompt('enter the score for the winner');
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
//document.querySelector('#current-'+activePlayer).innerHTML='<strong><em>'+dice+'</em></strong>';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}

function nextPlayer(){
        roundScore=0;
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
document.querySelector('.dice1').style.display='none';

}
