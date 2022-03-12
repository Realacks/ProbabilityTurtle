
// turtleButton code, identify button, run probability calc, output //


const turtleButton = document.getElementById("turtleButton");

turtleButton.addEventListener("click", riskIt);

function riskIt() {
    document.body.innerHTML = "<h1>You Risked It...</h1>"
    function rollDice() {
        return Math.floor(Math.random() * 20) + 1
    }
    const diceRoll = rollDice()
    console.log (diceRoll)
    if (diceRoll === 1 ) {
        window.location.href = "https://www.google.com/search?q=You+have+been+turned+into+a+turtle";
    } else {
        document.body.innerHTML = "<h2>Congratulations!! You have not been turned into a Turtle<h2>";
    }
};