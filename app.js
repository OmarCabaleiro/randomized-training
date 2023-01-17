var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn4 = document.getElementById('btn3');
var btnC = document.getElementById('btnC');
var btnR = document.getElementById('btnR');

var movements = ["loaded carry", "squat", "hinge", "superior pull",
"horizontal pull", "inferior pull", "superior push", 
"horizontal push", "inferior push", "gait", "jump", "crawl",
"rotation", "trunk extension", "trunk flexion","lift from ground",
"throwing"]

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
  movements.sort(function(){return 0.5 - Math.random()});
  const arr4 = movements.slice(0, 4);
  const arr5 = movements.slice(0, 5);
  const arr6 = movements.slice(0, 6);
  const arr7 = movements.slice(0, 7);
  const arr8 = movements.slice(0, 8);
  const arr9 = movements.slice(0, 9);
  const arr10 = movements.slice(0, 10);
  const arr410 = [arr4, arr5, arr6, arr7, arr8, arr9, arr10];
  results.innerHTML = arr410[Math.floor(Math.random() * arr410.length)];
}

function random() {
  movements.sort(function(){return 0.5 - Math.random()});
  const arr1 = movements.slice(0, 1);
  const arr2 = movements.slice(0, 2);
  const arr3 = movements.slice(0, 3);
  const arr4 = movements.slice(0, 4);
  const arr5 = movements.slice(0, 5);
  const arr6 = movements.slice(0, 6);
  const arr7 = movements.slice(0, 7);
  const arr8 = movements.slice(0, 8);
  const arr9 = movements.slice(0, 9);
  const arr10 = movements.slice(0, 10);
  const arr110 = [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10];
  results.innerHTML = arr110[Math.floor(Math.random() * arr110.length)];
}

// SOURCE for 1 exercise code: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

// SOURCE for array shuffle code: https://www.w3schools.com/js/js_array_sort.asp

// SOURCE for array slice code: https://www.w3schools.com/js/js_array_methods.asp