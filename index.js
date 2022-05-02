
// Site Wide Javascript //

// Creating turtle button functionality, adding click event listener //
const turtleButton = document.getElementById("turtleButton");

turtleButton.addEventListener("click", riskIt);

// Accessing local storage to see if previous rolls have been logged, retreiving that array or creating new one. //
let storedRolls = localStorage.getItem('resultArray');

let resultArray = storedRolls ? JSON.parse(storedRolls) : [];


//Calculating count of array entries (ie. successful rolls) and adding streak (count of array logs) to webpage//
let rollCounter = resultArray.length; 
let streak = document.getElementById('streakText');
streak.insertAdjacentText("afterend",rollCounter);

/*
Roll button function.. Roll dice 1=loss, 2-20=win - navigate to corresponding pages.. 
Log result to console and add it to array.. Reset Array if loss. Save new array to local storage.
*/
function riskIt() {
    function rollDice() {
        return Math.floor(Math.random() * 20) + 1;
    };
    const diceRoll = rollDice();
    console.log (diceRoll);
    if (diceRoll === 1 ) {
        window.location.href = "loser.html";
    } else {
        window.location.href = "winner.html";
    };
    resultArray.push(diceRoll);
    localStorage.setItem ('resultArray', JSON.stringify(resultArray));
    if (resultArray.includes(1)) {
        resultArray = [];
        localStorage.setItem('resultArray', JSON.stringify(resultArray));
    } 
    console.log (resultArray);
};

