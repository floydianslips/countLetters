args = process.argv.slice(2);
function countLetters(string) {
  var numLetter = string.join('');
  var finalLetters = {};
  for (var i = 0; i < numLetter.length; i++) {
    var num = numLetter[i];
    if (finalLetters[num]) {
      finalLetters[num]++;
    } else {finalLetters[num] = 1; }
}
return finalLetters;
}
console.log(countLetters(args));

//worked with @ringringlemurpants
