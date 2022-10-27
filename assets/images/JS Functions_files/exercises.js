(function () {
  "use strict";

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

  function max(num1, num2) {
    // finds the highest number
    if (num1 > num2) {
      // num1 and num2 rep the inputted numbers
      return num1; // if/else returns the greatest number
    } else {
      return num2;
    }
  }

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------

  function maxOfThree(num1, num2, num3) {
    // find the largest of three numbers
    return Math.max(num1, num2, num3); // Math.max compares all three numbers
  } // returns the greatest of the three

  // ---------------------
  // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  // ---------------------

  function isVowel(str) {
    if (
      str === "a" || // identifies vowels in a string
      str === "e" || // defines specific vowels
      str === "i" || // vowels return true, and other letter returns false
      str === "o" ||
      str === "u"
    ) {
      return true;
    } else {
      return false;
    }
  }

  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------

  function rovarspraket(str) {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
    let translatedStr = ""; // defines all possible consonants

    for (let i = 0; i < str.length; i++) {
      // loops through full string
      if (consonants.includes(str[i])) {
        // checks if each letter is defined in "consonants"
        translatedStr += str[i] + "o" + str[i]; // if it is defined it duplicates the letter and adds the "o" in between
      } else {
        translatedStr += str[i];
      }
    } // returns translated string

    return translatedStr;
  }

  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]; // adds/multiplies all numbers in array
    } // loops though each number in array adding/multiplying
    return total; // returns the total for the full array
  }

  function multiply(numbers) {
    let total = 1;
    for (let i = 0; i < numbers.length; i++) {
      total = total * numbers[i];
    }
    return total;
  }

  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------

  function reverse(str) {
    let text = ""; // reverses order of a string
    for (let i = str.length - 1; i >= 0; i--) {
      // loops through string starting at the end
      text += str[i]; // returns the string in opposite order
    }
    return text;
  }

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------

  function findLongestWord(array) {
    // identifies the longest word in an array and counts it
    let words = array.length;
    let count = 0;
    for (let i = 0; i < words; i++) {
      // loops through the array to count each word
      if (array[i].length > count) {
        count = array[i].length;
      }
    } //compares the count of each word and returns the largest
    return count;
  }

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------

  function filterLongWords(array, int) {
    let length = array.length;
    let longestWords = "";
    for (let i = 0; i < length; i++) {
      if (array[i].length > int) {
        longestWords[longestWords.length] = array[i];
      }
    }
    return longestWords;
  }

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------

  function charFreq(string) {
    let list = "";
    let length = string.length;
    for (let i = 0; i < length; i++) {
      if (string.charAt(i) in list) {
        list[string.charAt(i)] += +1;
      } else {
        list[string.charAt(i)] = 1;
      }
    }
    return list;
  }

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, "function max error");

  console.assert(maxOfThree(1, 2, 3) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(2, 3, 1) === 3, "ERROR funtion maxOfThree");

  console.assert(maxOfThree(3, 2, 1) === 3, "ERROR maxOfThree");

  console.assert(isVowel("a") === true, "ERROR function isVowel");

  console.assert(isVowel("b") == false, "ERROR function isVowel");

  console.assert(
    rovarspraket("this is fun") === "tothohisos isos fofunon",
    "ERROR function rovarspraket"
  );

  console.assert(sum([1, 2, 3, 4]) === 10, "ERROR function sum");

  console.assert(multiply([1, 2, 3, 4]) === 24, "ERROR function multiply");

  console.assert(
    reverse("jag testar") === "ratset gaj",
    "ERROR function reverse"
  );

  console.assert(
    findLongestWord([
      "hello",
      "world",
      "does",
      "anyone",
      "really",
      "know",
      "what",
      "time",
      "it",
      "is",
    ]) === 6,
    "ERROR function findLongestWord"
  );

  console.assert(
    filterLongWords(
      [
        "hello",
        "world",
        "does",
        "anyone",
        "really",
        "know",
        "what",
        "time",
        "it",
        "is",
      ],
      4
    ).length === 4,
    "ERROR function filterLongWords"
  );

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a === 7);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").b === 14);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").c === 3);

  console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").d === 3);
})();
