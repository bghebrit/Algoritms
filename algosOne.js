// RETURN THE REVERSED STRING OF INPUT
// EX. "HELLO" => "OLLEH"
// NOTE. WITH OUT USING ANY BUILT IN METHODS

// #1
function stringReverse(string){
    var temp = '';
    for (var i = string.length -1; i >= 0; i--) {
        temp += string[i];
    }
    return temp
   }
   
   var output = stringReverse('Hello')
   console.log(output)

// #2 PARENS VALID
function parensValid(str){
    var lcount = 0
    var lp = "("
    var rcount = 0
    var rp = ")"
    for (var i = 0; i < str.length; i++){
        if (str[0] !== lp) {
            return "Invalid! No opening ("
        } else {
            lcount++
        }
        if (str[str.length - 1] !== rp) {
            return "Invalid! No closing )"
        } else {
            rcount++
        } if (lcount == rcount) {
            return "Equal number of braces!"
        }
    }
}
var output = parensValid("()()()")
console.log(output)

function isPalindrome(string){

}
// #3 RETURN TRUE OR FALSE DEPENDING ON WHETHER THE WORD IS A PALINDROME
// "HELLO" => FALSE
// "LOL" => TRUE

function isPalindrome(string){
    for (var i = 0; i < string.length / 2; i++){
      if (string[i] !== string[string.length - 1 -i]) {
        return false
      }
    }
    return true
  }
  
  console.log(isPalindrome('HELLO'))
  console.log(isPalindrome('LOL'))

// #4 STRING ANAGRAM

function anagram(str1, str2) {
    var count = {};
    var count2 ={};
    for (var x = 0; x < str1.length; x++) {
      if (count[str1[x]] === undefined) {
        count[str1[x]] = 1;
      } else {
        count[str1[x]]++;
      }
    }
    console.log(count)
    for (var y = 0; y < str2.length; y++) {
        if (count2[str2[y]] === undefined) {
            count2[str2[y]] = 1;
        } else {
            count2[str2[y]]++;
        }
    }
    console.log(count2)
    if (count == count2) {
        return true
    } else {
        return false
    }
  }

anagram('bin', 'nib')