/**
 * NOTES object contains absolute positioning of quarter notes
 * relative to the staff.
 * The keys are strings that indicate which line of the staff
 * the note is located on with 0 being the space below the bottom
 * line.
 */
const NOTES = {
    // "-0.5": {
    //     position: "-68px",
    //     bass: "e2",
    //     treble: "c4",
    //     flipped: false,
    //     staffExtend: "bottom-extend",
    // },
    "0": {
        position: "-79px",
        bass: "f2",
        treble: "d4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "0.5": {
        position: "-90px",
        bass: "g2",
        treble: "e4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "1": {
        position: "-101px",
        bass: "a2",
        treble: "f4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "1.5": {
        position: "-112px",
        bass: "b2",
        treble: "g4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "2": {
        position: "-123px",
        bass: "c3",
        treble: "a4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "2.5": {
        position: "-76px",
        bass: "d3",
        treble: "b4",
        flipped: true,
        staffExtend: "no-extend",
    },
    "3": {
        position: "-87px",
        bass: "e3",
        treble: "c5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "3.5": {
        position: "-98px",
        bass: "f3",
        treble: "d5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "4": {
        position: "-109px",
        bass: "g3",
        treble: "e5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "4.5": {
        position: "-120px",
        bass: "a3",
        treble: "f5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "5": {
        position: "-131px",
        bass: "b3",
        treble: "g5",
        flipped: true,
        staffExtend: "no-extend",
    },
    // "5.5": {
    //     position: "-142px",
    //     bass: "c4",
    //     treble: "a5",
    //     flipped: true,
    //     staffExtend: "top-extend",
    // },
}
const svg = document.getElementById('note');
const noteButtons = document.querySelectorAll(".note-buttons button");

let answer;
let totalGuesses = 0;
let correctGuesses = 0;
let streak = 0;
let previousGuessCorrect = true;

//Add click event listener to buttons
for (btn of noteButtons) {
    btn.addEventListener("click", checkAnswer);
}

newRound();

/**
 * Checks answer when user makes a guess, updates innerHTML of .status element
 * triggers newRound() if guess is correct
 * @param e     event       Click event on button
 */
function checkAnswer(e) {

    //Remove prompt if it exists
    if (document.querySelector('.prompt') != null)
        document.querySelector('.prompt').remove();

    //Tell the user what they guessed
    document.querySelector(".your-guess").innerHTML = `You guessed ${e.target.name.toUpperCase()}`;
    //Update total totalGuesses
    totalGuesses++;

    //Tell the user if guess is correct
    if (e.target.name == answer) {
        document.querySelector(".correctness").innerHTML = `That is correct!`;
        correctGuesses++;
        if(previousGuessCorrect)
            streak++;
        live
        newRound();
    } else {
        document.querySelector(".correctness").innerHTML = `That is incorrect. Try again.`;
        streak = 0;
    }

    //Display score
    document.querySelector(".score").innerHTML = `Score: ${correctGuesses}/${totalGuesses}`;
    //Display streak
    document.querySelector(".streak").innerHTML = `Streak: ${streak}`;
}

function displayScore(){

}

/**
 * Generates random note and displays on staff
 */
function newRound() {
    const clef = "bass";
    const randomNote = randomEntry(NOTES);
    answer = randomNote[clef][0];
    console.log(answer);
    displayNote(randomNote);
}

/**
 * Displays note based on predefined NOTES object
 * Takes into consideration if note needs to be flipped
 * Adds staff extend if necessary
 *
 * @param note     obj       note object in NOTES
 */
function displayNote(note) {
    // vertically positions note on staff
    svg.style.top = note.position;

    // flips note upside-down if necessary
    if (note.flipped)
        svg.style.transform = "rotate(180deg)";
    else
        svg.style.transform = "none";

    //Adds line through note if positioned above or below grand staff
    document.getElementById("staff-extend").setAttribute("class", `line staff-extend ${note.staffExtend}`)
}

/**
 * Returns random note object from object NOTES
 *
 * @param obj     obj       NOTES
 * @return object in NOTES
 */
function randomEntry(obj) {
    let keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};
