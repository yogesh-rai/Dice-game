var scores, current, activePlayer, dice, isPlaying;

initial();


document.querySelector(".win-0").style.display="none"
document.querySelector(".win-1").style.display="none"
//document.querySelector("#current-" + activePlayer).textContent = dice;

// document.querySelector(".dice").style.display="none";

function initial() {
    scores = [0,0];
    current = 0;
    activePlayer  = 0;
    isPlaying = true;  // to keep check of is game is playing or not

    document.querySelector(".dice").style.display="none"
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#current-1").textContent=0;
    document.querySelector("#score-0").textContent=0;
    document.querySelector("#score-1").textContent=0;
    document.querySelector("#player-0").classList.remove("winner");
    document.querySelector("#player-1").classList.remove("winner");
    document.querySelector(".name-0").innerHTML="<h1>PLAYER 1</h1>";
    document.querySelector(".win-0").style.display="none"
    document.querySelector(".name-1").innerHTML="<h1>PLAYER 2</h1>";
    document.querySelector(".win-1").style.display="none"

    document.querySelector("#player-0").classList.remove("active-player");
    document.querySelector("#player-1").classList.remove("active-player");
    document.querySelector("#player-0").classList.add("active-player");
}


document.querySelector(".dice-roll").addEventListener('click',function() {
 
   if(isPlaying)
   { 
        // random dice number
        dice = Math.floor(Math.random()*6)+1;
        
        // show the dice
        document.querySelector(".dice").style.display="block";
        document.querySelector(".dice").src="dice-" + dice + ".png";
    
        // update the scores
        if(dice !== 1)
        {  
            current += dice;
            document.querySelector("#current-" + activePlayer).textContent = current;
        }
        else
        {
            nextPlayer();
        }

    }
});

document.querySelector(".hold").addEventListener('click',function() {
    if(isPlaying)
    {
        // add current scores to total scores
        scores[activePlayer] += current;

        // update the total scores
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        // check if player wins
        if(scores[activePlayer] >= 100)
        {
            document.querySelector(".name-" + activePlayer).innerHTML="<h1>WINNER!</h1>";
            document.querySelector(".win-" + activePlayer).style.display="block"
            document.querySelector(".dice").style.display="none";
            document.querySelector("#player-" + activePlayer).classList.add("winner");
            document.querySelector("#player-" + activePlayer).classList.remove("active-player");
            isPlaying = false;
        }
        else
        {
            document.querySelector(".dice").style.display="none";
            nextPlayer();
        }

    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    current = 0;
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;

    document.querySelector("#player-0").classList.toggle("active-player");
    document.querySelector("#player-1").classList.toggle("active-player");
}

document.querySelector(".new-game").addEventListener('click', initial);