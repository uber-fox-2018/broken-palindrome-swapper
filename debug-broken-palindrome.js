/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {

  if(isPalindrome(str)) return true // untuk menangani ketika str langsung bernilai palindrome

  // let newStr = ''; // pindahkan kedalam for pertama
  for (var i = 0; i < str.length; i++) {
    let newStr = '';
    // debugger
    for (var j = 0; j < str.length; j++) { // ubah menjadi j++
      if (i === j) {
        // debugger
        // newStr += str[j++]; //ubah j++ menjadi j+1
        newStr += str[j+1];
        newStr += str[j]
        j++ // 2
      } else {
        newStr += str[j];
      }
    }
    // debugger
    // console.log(newStr)
    if (isPalindrome(newStr)) return true;
    
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
  if (str.split('').reverse().join('') === str) { // menambahkan '' pada join
    return true;
  }
  // return false; // matikan false
}

console.log(palindromeSwapper('arcecar')); // TRUE
console.log(palindromeSwapper('racecar')); // TRUE
console.log(palindromeSwapper('recacar')); // FALSE