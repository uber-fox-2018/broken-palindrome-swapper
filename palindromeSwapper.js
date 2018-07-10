/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  // console.log(str)
  
  for (var i = 0; i < str.length ; i++) {
    var newStr = ''
    for (var j = 0; j < str.length; j++) {
      if (i ===  j && str[j+1] !== undefined) {
        newStr += str[j+1];
        newStr += str[j];
        j++
      }else {
        newStr += str[j]
      }
    }
    console.log(newStr)

    if (isPalindrome(newStr)){
      return true
    }
  }
  return false;
}

/**
 * @function isPalindrome
 * Cek apabila kata merupakan palindromeSwapper
 * @param {string} str - input kata yang dicek bila palindrom
 * @returns {boolean} true bila kata adalah palindrom
 */
function isPalindrome(str) {
  // console.log(str.split())
  // console.log(str.split().reverse())
  // console.log(str.split().join(',').reverse())
  // console.log('split: '+str.split('').reverse().join(''))
  // console.log('str: '+str)
  // str.split('').reverse().join('') === str
  if (str.split('').reverse().join('') == str){
    return true
  }
  
  // return console.log(false);
}

console.log(palindromeSwapper('makam')); // TRUE
console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE