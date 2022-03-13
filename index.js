
// turtleButton code, identify button, run probability calc, output //


const turtleButton = document.getElementById("turtleButton");

turtleButton.addEventListener("click", riskIt);

function riskIt() {
    setTimeout (function() {
        function rollDice() {
            return Math.floor(Math.random() * 20) + 1
        }
        const diceRoll = rollDice()
        console.log (diceRoll)
        if (diceRoll === 1 ) {
            window.location.href = "loser.html";
        } else {
            window.location.href = "winner.html";
        }
    }, 1000);

    document.body.innerHTML = "<h1>You Risked It...</h1>"
/*    function rollDice() {
        return Math.floor(Math.random() * 20) + 1
    }
    const diceRoll = rollDice()
    console.log (diceRoll)
    if (diceRoll === 1 ) {
        window.location.href = "loser.html";
    } else {
        window.location.href = "winner.html";
    }
    */
};