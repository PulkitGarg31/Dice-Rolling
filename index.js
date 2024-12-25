function rollDice() {
    const diceContainer = document.getElementById('dice-container');
    const diceCount = parseInt(document.getElementById('dice-count').value, 10);
  
    // Clear previous dice
    diceContainer.innerHTML = '';
    let sum =0;
    const showsum = document.getElementById("showsum");
    // Generate the requested number of dice
    for (let i = 0; i < diceCount; i++) {
      const randomNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      const diceImg = document.createElement('img');
      diceImg.src = `Dice_images/${randomNumber}.png`;
      diceImg.alt = `Dice showing ${randomNumber}`;
      diceContainer.appendChild(diceImg);
      sum+=randomNumber;
    }
    showsum.textContent=`You Get a Total of ${sum} !!`;

  }
  