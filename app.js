var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btnC = document.getElementById('btnC');
var btnR = document.getElementById('btnR');

var movements = ["loaded carry", "squat", "hinge", "superior pull",
"horizontal pull", "inferior pull", "superior push", 
"horizontal push", "inferior push", "gait", "jump", "crawl",
"rotation", "trunk extension", "trunk flexion","lift from ground",
"throwing"]

// SOURCE for 1 exercise code: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/
function emom() {
  results.innerHTML = movements[Math.floor(Math.random() * movements.length)];
}

function couplet() {
  results.innerHTML = movements[Math.floor(Math.random() * movements.length)] + ",<br>" +
    movements[Math.floor(Math.random() * movements.length)];
}

function triplet() {
  results.innerHTML = movements[Math.floor(Math.random() * movements.length)] + ",<br>" +
    movements[Math.floor(Math.random() * movements.length)] + ",<br>" +
    movements[Math.floor(Math.random() * movements.length)];
}

function chipper() {

}

function random() {

}