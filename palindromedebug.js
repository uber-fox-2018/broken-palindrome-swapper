/**
 * @function palindromeSwapper
 * menukar 2 huruf berurutan dari n = 0 sampai n-1
 * contoh: makan => amkan, mkaan, maakn, makna
 * @param {string} str - input kata yang ingin di-swap dan dicek palindrom
 * @returns {boolean} true bila kata yang di-swap adalah palindrom
 */
function palindromeSwapper(str) {
    if (isPalindrome(str)) {                 // Harus ada step pertama utk check apakah str original itu palindrome
        return true
    } else {
        
        for (var i = 0; i < str.length; i++) {
            let newStr = '';                         // temporary string dipindah agar setiap i naik, temp string kosong
          for (var j = 0; j < str.length; j++) {    // seharusnya j++
            if (i === j) {
                debugger
              newStr += str[j+1];                     // diubah menjadi j+1
              newStr += str[j];
              j++
              
            } else {
              newStr += str[j];
              
            }
          }        
          if (isPalindrome(newStr)) {return true}
        }
        return false;

    }   
}
  
  /**
   * @function isPalindrome
   * Cek apabila kata merupakan palindromeSwapper
   * @param {string} str - input kata yang dicek bila palindrom
   * @returns {boolean} true bila kata adalah palindrom
   */
  function isPalindrome(str) {
    if (str.split('').reverse().join('') === str) {      // untuk join ditambah '' dalam kurung
        return true
    }
    debugger
    
  }
  
  console.log(palindromeSwapper('arcecar')); // TRUE 
  console.log(palindromeSwapper('racecar')); // TRUE
  console.log(palindromeSwapper('recacar')); // FALSE