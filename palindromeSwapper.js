/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
  // let newStr = ''; ===> Pindah ke dalam looping i
  // debugger;
  for (var i = 0; i <= str.length; i++) { // i < str.length; ===> diganti menjadi lebih kecil sama dengan / <=
    let newStr = '';
    for (var j = 0; j < str.length; j++) { // i++ ===> Looping diganti menjadi j++
      // debugger;
      if (i === j) {
        newStr += str[j+1]; // str[j++]; ====> Dirubah menjadi (j+1)
        newStr += str[j];
        j++;
      } else {
        newStr += str[j];
      }
    }
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
  // debugger;
  if (str.split('').reverse().join('') === str) return true; // join()  ===> Kurang tanda kutip pada join ('')
  return false;
}

console.log(palindromeSwapper('arcecar')); // TRUE 
console.log(palindromeSwapper('racecar')); // TRUE 
console.log(palindromeSwapper('recacar')); // FALSE 
console.log(palindromeSwapper('makam'));
console.log(palindromeSwapper('makan'));
