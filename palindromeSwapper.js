/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  if (isPalindrome(str)) return true;

  for (var i = 0; i < str.length; i++) {
    var newStr = '';
    for (var j = 0; j < str.length; j++) {
      if (i === j) {
        newStr += str[j + 1];
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
      debugger;
      // console.log("Sekarang newStr: ", newStr);
    }
    debugger;
    if (isPalindrome(newStr)) return true;
  }
  return false;

}


function isPalindrome(str) {
  if (str.split('').reverse().join() === str) return true;
  return false;
}

function isPalindrome(str) {
  if (str.split('').reverse().join('') === str) return true;
  debugger;
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE
