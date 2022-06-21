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
let streak = 0;
let longestStreak = 0;

let clef = document.querySelector('input[name="clef-toggle"]:checked').value;

newRound();
displayStreak();

//Add click event listener to buttons
for (btn of noteButtons) {
    btn.addEventListener("click", processGuess);
}

//Add event listener for clef switches
document.querySelector('label[for="radio-treble"]').addEventListener("click", toggleClef);
document.querySelector('label[for="radio-bass"]').addEventListener("click", toggleClef);

function processGuess(e){
    if(e.target.name == answer){
        e.target.style.borderColor="lime";
        streak++;
        if(streak > longestStreak){
            longestStreak = streak;
        }
        setTimeout(newRound,600);
    }
    else{
        e.target.style.borderColor="red";
        streak=0;
    }
    displayStreak();
}

/**
 * Generates random note and displays on staff
 */
function newRound() {
    //Clear incorrect borders
    for(btn of noteButtons){
        btn.style.borderColor="gray";
    }
    // clef = document.querySelector('input[name="clef-toggle"]:checked').value;
    document.getElementById("radio-treble").checked = false;
    document.getElementById("radio-bass").checked = true;
    const randomNote = randomEntry(NOTES);
    answer = randomNote[clef][0];
    console.log(answer);
    displayNote(randomNote);

}

/**
    Toggles clef
*/
function toggleClef(e){

    alert("This functionality is under construction")
    
    // let clef = e.target.outerText.toLowerCase();
    // //Display clef
    // document.querySelector('.clef').setAttribute('src', `src/${clef}-clef.svg`)
    // document.querySelector('.clef').style.width = 'auto';
    // document.querySelector('.clef').style.height ='120px';
    // TODO: Adjust stylings for Treble clef


    //Start new round
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
    //document.getElementById("staff-extend").setAttribute("class", `line staff-extend ${note.staffExtend}`)
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

function displayStreak(){
    document.getElementById("streak").innerHTML = streak;
    document.getElementById("longest-streak").innerHTML = longestStreak;
}
