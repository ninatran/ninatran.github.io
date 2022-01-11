const NOTES = {
    "-0.5" : {
        position: "-68px",
        bass: "e2",
        treble: "c4",
        flipped: false,
        staffExtend: "bottom-extend",
    },
    "0" : {
        position: "-79px",
        bass: "f2",
        treble: "d4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "0.5" : {
        position: "-90px",
        bass: "g2",
        treble: "e4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "1" : {
        position: "-101px",
        bass: "a2",
        treble: "f4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "1.5" : {
        position: "-112px",
        bass: "b2",
        treble: "g4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "2" : {
        position: "-123px",
        bass: "c3",
        treble: "a4",
        flipped: false,
        staffExtend: "no-extend",
    },
    "2.5" : {
        position: "-76px",
        bass: "d3",
        treble: "b4",
        flipped: true,
        staffExtend: "no-extend",
    },
    "3" : {
        position: "-87px",
        bass: "e3",
        treble: "c5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "3.5" : {
        position: "-98px",
        bass: "f3",
        treble: "d5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "4" : {
        position: "-109px",
        bass: "g3",
        treble: "e5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "4.5" : {
        position: "-120px",
        bass: "a3",
        treble: "f5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "5" : {
        position: "-131px",
        bass: "b3",
        treble: "g5",
        flipped: true,
        staffExtend: "no-extend",
    },
    "5.5" : {
        position: "-142px",
        bass: "c4",
        treble: "a5",
        flipped: true,
        staffExtend: "top-extend",
    },
}
const svg = document.getElementById('note');
const noteButtons = document.querySelectorAll(".note-buttons button");
let answer;

for(btn of noteButtons){
    btn.addEventListener("click", checkAnswer);
}

function checkAnswer(e){
    if(e.target.name == answer){
        console.log("correct");
        document.querySelector(".status").innerHTML = "Correct!"
        newRound();
    }
    else {
        document.querySelector(".status").innerHTML = "Incorrect"
    }
}

newRound();

function newRound(){
    const clef = "bass";
    const randomNote = randomEntry(NOTES);
    answer = randomNote[clef][0];
    console.log(answer);
    displayNote(randomNote);
}

function displayNote(note){

    svg.style.top = note.position;

    if(note.flipped)
        svg.style.transform = "rotate(180deg)";
    else
        svg.style.transform = "none";

    document.getElementById("staff-extend").setAttribute("class", `line staff-extend ${note.staffExtend}`)
}

function randomEntry(obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};
