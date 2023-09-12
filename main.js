// Letters
let theLetters="abcdefghijklmnopqrstuvwxyz";

// Array From The Letters
let theCharacters=Array.from(theLetters);

// Get Letters Element From html
let letterElement=document.querySelector(".letters");

// Loop On The Letters(the Array Of Letters)
theCharacters.forEach(letter => {

    // Create Span
    let theLetterSpan=document.createElement("span");

    // create Letter Text Node
    let letterTextNode=document.createTextNode(letter);

    // Add Class For The span
    theLetterSpan.className="letter-box";

    // Append The Letter Text Node To The Span
    theLetterSpan.appendChild(letterTextNode);

    // Append the Letter Span To The Letters HTML Element
    letterElement.appendChild(theLetterSpan);

});


// create Object Conatins All Words
let words={
    "Programming": ["Java", "Java Script", "PHP", "Html", "Css", "R", "Go", "C", "Python"],
    "Sports": ["Football", "Basketball", "Handball", "Tennis"],
    "Hoppies": ["Sports", "Watching Films"],
};

// Get All Object Keys
let allKeys=Object.keys(words);

// Get Random Index From Keys
let randomKeyIndex=Math.floor(Math.random()*allKeys.length);

// Get Random Key
let RandomKey=allKeys[randomKeyIndex];

// Add Key To Category Span
document.querySelector(".category span").innerHTML=RandomKey;

// Get random array Value Depend On Key
let randomArrayValues=words[RandomKey];

// Get Random Value Form Each Array Depend On KEy Value
let randomValue=randomArrayValues[Math.floor(Math.random()*randomArrayValues.length)];
console.log(randomValue);

// Get The Length Of Each Word
let randomValueLength=randomValue.length;

// Convert Random Value To array
let letterArary=Array.from(randomValue);

// Select the letter-guess From html Element
let theGuessdLetter=document.querySelector(".letter-guess");

// Answer Array
let rightAnswer=[];

// Loop On the Array 
letterArary.forEach(letter => {

    // Create Letter Span
    let letterSpan=document.createElement("span");

    // Add ClassName To The Letter Span
    letterSpan.className="theValue";

    if(letter===" ") {

        // Add Class To The span
        letterSpan.classList.add("has-space");

        // Add Space To The RightAnswer Array
        rightAnswer.push(" ");
    }
    // Append letter Span To The Guessed Letters In HTML element
    theGuessdLetter.appendChild(letterSpan);
});

// Select All Gussed Span
let gussedSpan=document.querySelectorAll(".letter-guess span");


// define a variable For Wrong Answer
let wrongAnswer=0;

// Select The Hangman-Draw Element
let theHangmanDraw=document.querySelector(".hangman-draw");

// Handle clicking on letter[letters are dynamically generated in js]
document.addEventListener("click", function (e) {
    // Set status to br false by default
    let status=false;

    // Check if the Letter Has a letter-box className
    if(e.target.className==="letter-box") {
        e.target.classList.add("clicked");

        // Assign the value of the target to varible
        let targetValue=e.target.innerHTML.toLowerCase();

        // Compare The clicked Letter With The letter in the random value of chosen word
        let theChosenWord=Array.from(randomValue.toLowerCase());

        theChosenWord.forEach((wordLetter, wordIndex) => {
            if(targetValue===wordLetter) {

                // Set The Status To be True
                status=true;

                // Append clicked Value To The RightAnswer Array
                rightAnswer.push(wordLetter);

                console.log(theChosenWord);
                // Calling Congratulation Function
                if(rightAnswer.length===gussedSpan.length) {
                    congratolation();


                }

                // Loop On Guessed Span
                gussedSpan.forEach((gussedLetter, gussedIndex) => {
                    if(wordIndex===gussedIndex) {
                        gussedLetter.innerHTML=wordLetter.toUpperCase();
                    }
                });
            }
        });
        console.log(rightAnswer);
        if(status!==true) {
            // increase Wrong Answer
            wrongAnswer++;

            // Add Class To The theHangmanDraw
            theHangmanDraw.classList.add(`wrong-${wrongAnswer}`);

            // Check if the Wrong Answer equal 8 you lose
            if(wrongAnswer===8) {
                letterElement.classList.add("finish");
                endGame();
            }

            // Select InCorrect Guess Element
            let incorrectGuess=document.querySelector(".incrocct-guess");
            incorrectGuess.innerHTML=`Incorrect Guesses: ${wrongAnswer} / 8`;
        }
    }
});

// Select The Result Elemet
let theResult=document.querySelector(".result");
function endGame () {
    // Create Popup To show that the player is lose

    theResult.innerHTML=`YOU LOSE THE GAME THE WORD IS : ${randomValue.toUpperCase()}`;
    theResult.style.display="block";
    // create Button For tryAgain
    let tryAgain=document.createElement("button");

    // Assign value to the button
    tryAgain.innerText="Try Again";

    // set classname to the button
    tryAgain.className="tryagain";

    // Select the next button from html page
    let theTryBtn=document.querySelector(".tryAginbutton");

    // Append The button to the button
    theTryBtn.appendChild(tryAgain);
}

// Try Again Function

function congratolation () {
    // Create Popup To show that the player is lose
    theResult.innerHTML="Congratolation";

    // Appear The Result
    theResult.style.display="block";

    // create Button For NextLevel
    let nextBtn=document.createElement("button");

    // Assign value to the button
    nextBtn.innerText="Next Level";

    // set classname to the button
    nextBtn.className="nextlevel";

    // Select the next button from html page
    let theNextButton=document.querySelector(".nextbutton");

    // Append The button to the button
    theNextButton.appendChild(nextBtn);

}

// setInterval(() => {
//     theResult.innerHTML+=".";
// }, 1000);
// setTimeout(() => {
//     window.location.reload();
// }, 4000);