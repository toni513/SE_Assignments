//Functions

//1.Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(intx, inty) {

  if (intx > inty) {
    console.log(intx + " is larger than " + inty);
  } else {
    console.log(intx + " is less than " + inty);
  }
}
maxOfTwoNumbers(25, 40);

//2.Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThreeNumbers(intx, inty, intz) {

  if (intx > inty && intx > intz) {
    console.log(intx + " is larger!");
  }  else if (inty > intx && inty > intz) {
    console.log(inty + " is larger!");
  } else {
    console.log(intz + " is larger!");
  }
}
  maxOfThreeNumbers(15, 30, 45);

//3.Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isCharacterAVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' ||
      char == 'o' || char == 'u') {
      console.log('true!');
    } else {
      console.log('false!');
    }
  }
  isCharacterAVowel('d');

//4.Write a function charCount that takes a string and returns the length of the string.
function charCount(char){
   return characters.length;
 }
 console.log(findCharacterCount("Honey, I/'m home!"));

//5.Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characteers
function vowelCount(char){
   return vowel.length;
 }
 console.log(findVowelCount("Baby,It/'s cold outside!"));
