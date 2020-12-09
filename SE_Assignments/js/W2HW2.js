//1.) Max of two numbers.
function maxOfTwoNumbers(intx, inty) {

  if (intx > inty) {
    console.log(intx + " is larger than " + inty);
  } else {
    console.log(intx + " is less than " + inty);
  }
}
maxOfTwoNumbers(20, 10);

//2.) Max of three numbers.

function maxOfThreeNumbers(intx, inty, intz) {

  if (intx > inty && intx > intz) {
    console.log(intx + " is larger!");
  }  else if (inty > intx && inty > intz) {
    console.log(inty + " is larger!");
  } else {
    console.log(intz + " is larger!");
  }
}
  maxOfThreeNumbers(2, 5, 10);

  //3.) CharacteraVowel:true or false.

  function isCharacterAVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' ||
      char == 'o' || char == 'u') {
      console.log('true!');
    } else {
      console.log('false!');
    }
  }
  isCharacterAVowel('c');

//4.) sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray([a,b,c,d]) {
return a + b + c + d;
};

console.log(sumArray([1,2,3,4]));

function multiplyArray([a,b,c,d]) {
return a * b * c * d;
};

console.log(multiplyArray([1,2,3,4]));

//5.) Write a function that returns the number of arguments passed to the function when called.

function findArgumentCount(arg){
   return arguments.length;
 }
 console.log(findArgumentCount("pizza", "taco", "pickle", "coney", "rice", "pasta", "fish"));

//6.) Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
  let newString = "";
  for(let i = str.length - 1; i >= 0; i--) {
    newString +=str[i];
  }
  return newString;
}
console.log(reverseString('Hey love!'));

//7.) Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(arr) {
  let longestWord = 0;
  for(let i = 0; i < arr.length; i++) {
     if(arr[i].length > longestWord) {
     longestWord = arr[i].length;
   }
}
return longestWord;
}
console.log(findLongestWord(['New', 'coders', 'code', 'slowly', 'whatever']));

//8.)function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

function filterLongWords(arr, int) {
  let length = arr.length;
  let longestWords = [];
  for(i = 0; i < length; i++) {
    if(arr[i].length > int) {
      longestWords[longestWords.length] = arr[i];
    }
  }
  return longestWords;
}
console.log(filterLongWords(['New', 'coders', 'code', 'slowly', 'whatever']));
