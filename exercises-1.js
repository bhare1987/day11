

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    for (var i = 0; array.length > i; i++) {
      callback(array[i]);
    }
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// // and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments),
    sum = 0;
    function sumArgs(item) {
      sum += item;
    }
    args.forEach(sumArgs);
    return sum;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments),
    average = 0,
    sum = 0;
    args.forEach(function(item){
      sum += item;
    });
    average = sum / args.length;
    return average;

}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments),
    largest = 0;
    args.forEach(function(item){
      if ( item > largest) {
        largest = item;
      }
    });
    return largest;
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments),
    longest = 0,
    output = "";
    args.forEach(function(item){
      if (item.length > longest) {
        longest = item.length;
        output = item;
      }
    });
    return output;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
function alphabetize(words){
  var args = [].slice.call(arguments),
  output = args.sort();
  return output;
}

console.assert( alphabetize("aardvark", "zebra", "bottle" ).lastIndexOf("zebra") === 2);

// .concat()
function joinArrays(array1, array2) {
  return array1.concat(array2);
}

console.assert( joinArrays([1, 2, 3], ["a, b, c"]).length === 4);


// .indexOf()
function whereIsJohnny(array){
  if(array.indexOf("Johnny")) {
    return "Johnny is here!"
  } else {
    return "Johnny isn't here."
  }
}

console.assert( whereIsJohnny(["Nevan", "Brandon", "Johnny"]) === "Johnny is here!");

// .split()

function splitTheString(string){
  return string.split("");
}

console.assert(splitTheString("Brandon").length === 7);


// .join()

function unsplitTheString(array){
  return array.join("");
}

console.assert(unsplitTheString(["B", "r", "a", "n", "d", "o", "n"]) === "Brandon");

// .pop()

function popThatShizz(array){
  return array.pop();
}

console.assert(popThatShizz(["B", "r", "a", "n", "d", "o", "n"]) === "n");

// .push()

function pushThatShizz(string) {
  var array = [];
  return array.push(string);
}

console.assert(pushThatShizz("Brandon") === 1);


// .slice()

function cutOutTheMiddle(array) {
  var end = array.length - 1;
  return array.slice(1, end);
}

console.assert(cutOutTheMiddle([1, 2, 3, 4, 5]).indexOf(5) === -1);

// .splice()

function addNicCage(array) {
  return array.splice(0, "Nic Cage");
}

console.assert(addNicCage([1, 2, 3, 4, 5]).indexOf("Nic Cage")) === 0;


// .shift()

function shiftStart(array) {
  return array.shift();
}

console.assert(shiftStart([1,2,3,4,5]) === 1);

// .unshift()

function shiftEnd(array, item) {
  return array.unshift(item);
}

console.assert(shiftStart([1,2,3,4,5], "CAGE!") === 1);

// .filter()

function killKanye(array) {
  var count;
  function isKanye(item){
    return item.toLowerCase() !== "kanye";
  };

  return array.filter(isKanye);

}

console.assert(killKanye(["kanye", "Brandon", "Betsy"]).indexOf("kanye") ===  -1);

// .map()

function takeItToTheFloor(array) {
  return array.map(Math.floor);
}

console.assert(takeItToTheFloor([1.2, 1.4, 1.9, 1.99]).indexOf(2) === -1);
