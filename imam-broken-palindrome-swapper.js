function palindromeSwapper(string) {
  let reversed = '';
  for(let i = string.length-1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed === string

}

console.log(palindromeSwapper('racecar'));
// console.log(palindromeSwapper('world!'));
console.log(palindromeSwapper('recacar')); // FALSE