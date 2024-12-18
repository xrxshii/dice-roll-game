function decidingWin () { 
  let result = ('');
  
  let userRoll = Math.floor(Math.random()*6) +1;
  let computerRoll = Math.floor(Math.random()*6) + 1;

  if (userRoll === computerRoll) {
    result = 'Draw!';
  } else if (userRoll >= computerRoll) {
    result = 'You win!';
  } else {
    result = 'You lose!';
  }

  console.log(`You rolled ${userRoll}. Computer rolled ${computerRoll}. ${result}`);
  document.getElementById("messageResult").textContent = 
  (`You rolled ${userRoll}. 
  Computer rolled ${computerRoll}. 
  ${result}`);
}
