
// turtleButton code, identify button, run probability calc, output //

let turtleButton = document.getElementById("turtleButton");

turtleButton.addEventListener("click", function(e) {
    document.body.innerHTML = "<h1>You Risked It...</h1>"
    rollDice()
});

if (rollDice === 1) {
    document.body.innerHTML = 
    "<h2>You have been turned into a turtle...</h2>";
} else {
    document.body.innerHTML = "<h2>You have won!! +$100,000</h2>"
}
function rollDice() {
    var rollDice = 
        math.floor(math.random() * 20) + 1;
        return rollDice;
}