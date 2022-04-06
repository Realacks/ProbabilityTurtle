
// turtleButton code, identify button, run probability calc, output //


const turtleButton = document.getElementById("turtleButton");

turtleButton.addEventListener("click", riskIt);

let storedRolls = localStorage.getItem('resultArray');

let resultArray = storedRolls ? JSON.parse(storedRolls) : [];

function riskIt() {
    function rollDice() {
        return Math.floor(Math.random() * 20) + 1
    }
    const diceRoll = rollDice();
    console.log (diceRoll);
    if (diceRoll === 1 ) {
        window.location.href = "loser.html";
    } else {
        window.location.href = "winner.html";
    };
    resultArray.push(diceRoll);
    localStorage.setItem ('resultArray', JSON.stringify(resultArray));
    let rollCounter = resultArray.length; 
    if (resultArray.includes(1)) {
        resultArray = [];
        localStorage.setItem('resultArray', JSON.stringify(resultArray));
    } else { //Trying to log streak to webpage as count of array entries//
        let streak = document.getElementById('streakText');
        streak.insertAdjacentText("afterend", 'Streak:', rollCounter);
    }
    console.log (resultArray);
    console.log(rollCounter)
};

