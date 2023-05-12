function isPalindrome(word) {
  // Write your algorithm here
//   const letters = word.split('');
  
//   for(let i=0; i<letters.length; i++){
//     const firstLetter = letters[i];
//     const lastLetter = letters[letters.length-1-i]
//     if(firstLetter === lastLetter){
//       return "true"
//     } else {return "false"}
//   }
  
  const letters = word.split('');

  let start = 0;
  let end = letters.length -1;

 

  while(end> start){
    if (letters[end] !== letters[start]){
      return false

    
    }
    start++;
    end--

  }
  return true


}



/* 
  Add your pseudocode here

*/

/*
  Add written explanation of your solution here
  I believe we first have to split the string into an array of letters.
  then compare the first letter [n=0] with last index [n-1], 
  similarly, [n=1] with [n-2]
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
