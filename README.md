# ProbabilityTurtle

This project is effectively a browser game involving luck. A user hits the button titled &quot;Risk It!&quot; to have a 5% chance of becoming a turtle. In code, this means rolling a d20. If you land on a 1, you fail, while 2 through 20 results in a win. On roll, the code takes you to a winner or loser page. The winner page shows your current streak of rolls without a fail and allows you to roll again. The loser page displays a spinning turtle while the javascript clears the streak.

In coding terms, you land on index.html where the initial button is. On click of the button, a function runs to roll a d20.

If you roll (ie. RNG) a 2 through 20, you are transported to winner.html. The result is logged into an array which is stored in local storage. Javascript counts the entries on this array to determine the number to display after end on the Streak text on the winner.html page.

If you roll a 1, you are transported to the loser.html page where a different picture of a turtle spins thrice using CSS animation and javascript deletes the contents of the array.

For purposes of the Code Louisville project, you may access the site through the hosting Page provided by Github or by running the code. Initial landing page should be index.html. I have implemented 1 CSS feature and 6 of the Javascript features from the list. I believe I have implemented a CSS animation for the CSS feature. This takes place on the loser.html page and is hooked to the loser image. The animation rotates the picture 360 degrees 3 times. Javascript features that I believe I have fulfilled are: create a function that performs a mathematical operation and display contents; create/populate a Javascript array and display contents; create a Javascript loop that dynamically displays HTML; create at least 3 variables, set, and display values; create and modify an Javascript object; and show or hide content areas based on clicking a button. The dice roll function is a mathematical operation, which changes what HTML is used in the site based on the outcome. I created an array to store the result of the rolls and edit that object based on the result of the rolls. I use various variables to utilize the stored array and function to manipulate the site and, in particular, what displays for the streak count.

I have also implemented 2 media queries focused on displaying additional content as screen size increases. In the smallest windows, my site will display core functionality and headings only. More flavor is added as the window gets larger, including inline display of the nav bar, explanations of the project premise, and the loser css animation.

Thank you for visiting Probability Turtle! This project has been a fun venture in the the world of coding. I hope you find it enjoyable. 
