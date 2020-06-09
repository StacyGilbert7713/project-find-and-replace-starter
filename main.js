const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")

const replaceAllButton = document.querySelector(".replace-all-button")
replaceAllButton.addEventListener("click", function() {
    console.log("This button is working!");
  });


const rowElements = document.querySelectorAll(".row")
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}



// YOUR CODE GOES HERE


// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
