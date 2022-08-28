function isPalindrome(word) {
  // Write your algorithm here
  const str = word.split("");
  const strReverse = str.reverse().join("");
  if (strReverse === word) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("ab"));

/* 
  Add your pseudocode here
  Initialize a variable called str
    Call the split method on the string
  Initialize a variable called strReverse 
    call the reverse and join methods on the split string(str)
  If word is strictly equal to strReverse
    return true
    else false
  Call the function

*/

/*
  Add written explanation of your solution here
  * create a variable that holds the string
  * split the string by spaces
  * create a variable to store the split string
  * Reverse thr order of string
  * join the strings into one
  * call function and display output
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
