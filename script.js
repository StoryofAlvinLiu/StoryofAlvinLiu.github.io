var p1 = document.getElementById("puzzle1");
var p2 = document.getElementById("puzzle2");
var p3;
var p4;

var TL = false;
var TR = false;
var BL = false;
var BR = false;

var slot1 = document.getElementById("slot_1");
var slot2 = document.getElementById("slot_2");
var slot3 = document.getElementById("slot_3");
var slot4 = document.getElementById("slot_4");
var x = 0;

function checkPuzzle() {
  if (
    slot1.src.match("images/puzzle/doodle1.jpg") &&
    slot2.src.match("images/puzzle/doodle2.jpg") &&
    slot3.src.match("images/puzzle/doodle3.jpg") &&
    slot4.src.match("images/puzzle/doodle4.jpg")
  ) {
    win();
    slot1.src = "images/puzzle/sponge1.png";
    slot2.src = "images/puzzle/sponge2.png";
    slot3.src = "images/puzzle/sponge3.png";
    slot4.src = "images/puzzle/sponge4.png";
    console.log("Puzzle Complete!");
    document.getElementById("slot_1").classList.add("cancel");
    document.getElementById("slot_2").classList.add("cancel");
    document.getElementById("slot_3").classList.add("cancel");
    document.getElementById("slot_4").classList.add("cancel");
    document.getElementById("rebetset").classList.remove("invis");
  }
}
function checkcompletion() {
  if (TL === true && TR === true && BL === true && BR === true) {
    console.log("Unlocked Puzzle!");
    document.getElementById("backtl").classList.add("topleftanimation");
    document.getElementById("backtr").classList.add("toprightanimation");
    document.getElementById("backbl").classList.add("bottomleftanimation");
    document.getElementById("backbr").classList.add("bottomrightanimation");
    document.getElementById("slot_1").classList.remove("invis");
    document.getElementById("slot_2").classList.remove("invis");
    document.getElementById("slot_3").classList.remove("invis");
    document.getElementById("slot_4").classList.remove("invis");
    document.getElementById("slot_1").classList.add("hover-cursor");

    document.getElementById("theme").play();
  }
}

// functions for patrick, squidward, sandy, and krabs images
function changeToSponge1() {
  document.getElementById("top-left").src = "images/spongebob.png";
  document.getElementById("backtl").classList.remove("yellow");
  document.getElementById("backtl").classList.add("cancel");
  document.getElementById("top-left").classList.add("opaque");
  TL = true;
  checkcompletion();
}
function changeToSponge2() {
  document.getElementById("top-right").src = "images/spongebob.png";
  document.getElementById("backtr").classList.remove("pink");
  document.getElementById("backtr").classList.add("cancel");
  document.getElementById("top-right").classList.add("opaque");
  TR = true;
  checkcompletion();
}
function changeToSponge3() {
  document.getElementById("bottom-left").src = "images/spongebob.png";
  document.getElementById("backbl").classList.remove("purple");
  document.getElementById("backbl").classList.add("cancel");
  document.getElementById("bottom-left").classList.add("opaque");
  BL = true;
  checkcompletion();
}
function changeToSponge4() {
  document.getElementById("bottom-right").src = "images/spongebob.png";
  document.getElementById("backbr").classList.remove("green");
  document.getElementById("backbr").classList.add("cancel");
  document.getElementById("bottom-right").classList.add("opaque");
  BR = true;
  checkcompletion();
}

// functions for puzzle piece images
function piece1() {
  if (slot1.src.match("images/puzzle/doodle1.jpg")) {
    slot1.src = "images/puzzle/doodle2.jpg";
    checkPuzzle();
  } else if (slot1.src.match("images/puzzle/doodle2.jpg")) {
    slot1.src = "images/puzzle/doodle3.jpg";
    checkPuzzle();
  } else if (slot1.src.match("images/puzzle/doodle3.jpg")) {
    slot1.src = "images/puzzle/doodle4.jpg";
    checkPuzzle();
  } else if (slot1.src.match("images/puzzle/doodle4.jpg")) {
    slot1.src = "images/puzzle/doodle1.jpg";
    checkPuzzle();
  } else {
    document.getElementById("slot_1").src = "images/puzzle/doodle1.jpg";
    console.log("unknown error. resetting.");
    // change back to beginning img
  }
}

function piece2() {
  if (slot2.src.match("images/puzzle/doodle1.jpg")) {
    slot2.src = "images/puzzle/doodle2.jpg";
    checkPuzzle();
  } else if (slot2.src.match("images/puzzle/doodle2.jpg")) {
    slot2.src = "images/puzzle/doodle3.jpg";
    checkPuzzle();
  } else if (slot2.src.match("images/puzzle/doodle3.jpg")) {
    slot2.src = "images/puzzle/doodle4.jpg";
    checkPuzzle();
  } else if (slot2.src.match("images/puzzle/doodle4.jpg")) {
    slot2.src = "images/puzzle/doodle1.jpg";
    checkPuzzle();
  } else {
    document.getElementById("slot_2").src = "images/puzzle/doodle1.jpg";
    console.log("unknown error. resetting.");
    // change back to beginning img
  }
}
function piece3() {
  if (slot3.src.match("images/puzzle/doodle1.jpg")) {
    slot3.src = "images/puzzle/doodle2.jpg";
    checkPuzzle();
  } else if (slot3.src.match("images/puzzle/doodle2.jpg")) {
    slot3.src = "images/puzzle/doodle3.jpg";
    checkPuzzle();
  } else if (slot3.src.match("images/puzzle/doodle3.jpg")) {
    slot1.src = "images/puzzle/doodle4.jpg";
    checkPuzzle();
  } else if (slot3.src.match("images/puzzle/doodle4.jpg")) {
    slot1.src = "images/puzzle/doodle1.jpg";
    checkPuzzle();
  } else {
    document.getElementById("slot_3").src = "images/puzzle/doodle1.jpg";
    console.log("unknown error. resetting.");
    // change back to beginning img
  }
}
function piece4() {
  if (slot4.src.match("images/puzzle/doodle1.jpg")) {
    slot4.src = "images/puzzle/doodle2.jpg";
    checkPuzzle();
  } else if (slot4.src.match("images/puzzle/doodle2.jpg")) {
    slot4.src = "images/puzzle/doodle3.jpg";
    checkPuzzle();
  } else if (slot4.src.match("images/puzzle/doodle3.jpg")) {
    slot4.src = "images/puzzle/doodle4.jpg";
    checkPuzzle();
  } else if (slot4.src.match("images/puzzle/doodle4.jpg")) {
    slot4.src = "images/puzzle/doodle1.jpg";
    checkPuzzle();
  } else {
    document.getElementById("slot_4").src = "images/puzzle/doodle1.jpg";
    console.log("unknown error. resetting.");
    // change back to beginning img
  }
}

function win() {
  document.getElementById("done").play();
}

function reset() {
  location.reload();
}
