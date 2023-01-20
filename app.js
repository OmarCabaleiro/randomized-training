var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn4 = document.getElementById('btn3');
var btnC = document.getElementById('btnC');
var btnR = document.getElementById('btnR');

var movements = ["loaded carry", "squat", "hinge", "superior pull",
"horizontal pull", "inferior pull", "superior push", 
"horizontal push", "inferior push", "gait", "jump", "crawl",
"rotation", "trunk extension", "trunk flexion", "lift from ground",
"throw", "climb", "swim", "gluteofemoral", "upper body pull",
"upper body push", "wild card"]

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

/* function chipper() {
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
} */

// trying to clean up button 4 result display
function chipper() {
  movements.sort(function(){return 0.5 - Math.random()});
  const arr4 = movements.slice(0, 4);
  var result4 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3]

  const arr5 = movements.slice(0, 5);
  var result5 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4]
  
  const arr6 = movements.slice(0, 6);
  var result6 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5]
  
  const arr7 = movements.slice(0, 7);
  var result7 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6]
  
  const arr8 = movements.slice(0, 8);
  var result8 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7]
  
  const arr9 = movements.slice(0, 9);
  var result9 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7] + ",<br>" + "9. " + movements[8]
  
  const arr10 = movements.slice(0, 10);
  var result10 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7] + ",<br>" + "9. " + movements[8] + ",<br>" + "10. " + movements[9]
  
  const arr410 = [result4, result5, result6, result7, result8, result9, result10];
  results.innerHTML = arr410[Math.floor(Math.random() * arr410.length)];
}

/* function random() {
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
} */

// it worked for button 4 so, button 5 redux:
function random() {
  movements.sort(function(){return 0.5 - Math.random()});
  const arr1 = movements.slice(0, 1);
  var result1 = "1. " + movements[0]

  const arr2 = movements.slice(0, 2);
  var result2 = "1. " + movements[0] + ",<br>" + "2. " + movements[1]

  const arr3 = movements.slice(0, 3);
  var result3 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2]

  const arr4 = movements.slice(0, 4);
  var result4 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3]

  const arr5 = movements.slice(0, 5);
  var result5 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4]
  
  const arr6 = movements.slice(0, 6);
  var result6 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5]
  
  const arr7 = movements.slice(0, 7);
  var result7 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6]
  
  const arr8 = movements.slice(0, 8);
  var result8 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7]
  
  const arr9 = movements.slice(0, 9);
  var result9 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7] + ",<br>" + "9. " + movements[8]
  
  const arr10 = movements.slice(0, 10);
  var result10 = "1. " + movements[0] + ",<br>" + "2. " + movements[1] + ",<br>" + "3. " + movements[2] + ",<br>" + "4. " + movements[3] + ",<br>" + "5. " + movements[4] + ",<br>" + "6. " + movements[5] + ",<br>" + "7. " + movements[6] + ",<br>" + "8. " + movements[7] + ",<br>" + "9. " + movements[8] + ",<br>" + "10. " + movements[9]
  
  const arr110 = [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10];
  results.innerHTML = arr110[Math.floor(Math.random() * arr110.length)];
}

// SOURCE for 1 exercise code: https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/

// SOURCE for array shuffle code: https://www.w3schools.com/js/js_array_sort.asp

// SOURCE for array slice code: https://www.w3schools.com/js/js_array_methods.asp

// SOURCE of idea and syntax for buttons 4 and 5 results display fix: Head First JavaScript book by Eric Freeman and Elisabeth Robson- Chap 4 Phrase-O-Matic example code