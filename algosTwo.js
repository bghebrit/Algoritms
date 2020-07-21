// EX. ['A','A','B','C','C','C','D','D'] => {"A":2, "B":1, "C":3, "D":2}
// EX. ['A','C','C','C','D','D','A','B',] => {"A":2, "B":1, "C":3, "D":2}
/*
  Reverse Word Order
  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/
function reverseWordOrder(string){
    var wordArr = string.split(' ')
    var revArr = []
    for(var i = wordArr.length - 1; i >= 0; i--){
        revArr.push(wordArr[i])
    }
    return revArr.join(' ')
}


function reverseWordOrder(string) {
  var splitter = string.split(' ')
  var newStr = [];
  for (var i = splitter.length - 1; i >= 0; i--) {
    newStr.push(splitter[i])
  }
  return newStr.join(' ')
}
// CLOSING ROOMS SOON

reverseWordOrder(['This', 'is', 'a', 'test'])
// EX. "THIS IS A TEST" => "TEST A IS THIS"
// ['This is a test']
// ['test', 'a', 'is', 'This' ]

/*
  String: Dedupe
  Remove duplicate characters
    - (case-sensitive)
  Bonus: Keep only the last instance of each character.
*/
function dedupeString(string){
  var singString = ''
  var stringObj = {}
  for (var i = 0; i < string.length; i++){
    stringObj[string[i]] = 1
    }
    for(key in stringObj){
      singString +=key
    }
  return singString
}


function dedupeString(string) {
  var split = ''
  var obj = {}
  for (var i = 0; i < string.length; i++) {
    obj[string[i]]++
  }
  for (key in obj) {
    split += key
  }
  return split
}
dedupeString('aabacecbedd') // => abced

console.log("tacocat")



function dedupeString(string) {
  var arr = []
  for (var i = 0; i < string.length; i++) {
    arr[string[i]]++
  }
  return arr
}
dedupeString('aabacecbedd') // => abced

// EX. "aabacedcbed" => "abced"
// EX. "bbbbaaaaffff" => "baf"
/*
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/
function reverseWord(string){
  var words = string.split(' ')
  var revWord = ''
  for(var i = 0; i < words.length; i++){
    for(var j = words[i].length -1; j >= 0; j--){
      revWord += words[j]
    }
  }
}


function reverseArr(arr) {
  for (var x = 0; x < (arr.length-1) / 2; x++) {
      var temp = arr[x]
      arr[x] = arr[arr.length-1-x]
      arr[arr.length-1-x] = temp
  }
  return arr
}

var output = reverseArr([1, 2, 3, 4, 5, 6, 7]);
console.log("Expected:[7,6,5,4,3,2,1]", output)

function reverseWord(string) {
  var newStr = ''
  for (var i = 0;i < string.length; i++) {
    newStr += string[string.length - 1 - i]
  }
  for (var j = 0; j < string.length -1 / 2; j++) {
    var temp = newStr[j]
    newStr[j] = newStr[newStr.length -1 -j]
    newStr[newStr.length -1 - j] = temp
  }
  console.log(newStr)
}
reverseWord('hello world')
// EX. "HELLO" => "OLLEH"
// EX. "hello world" => "olleh dlrow"
// EX. "abc def ghi" => "cba fed ihg"


function reverseWord(string){
  var revString = ''
  var fwdStrArr = []
  for(var i = string.length-1; i >= 0; i--){
    revString += string[i]
  }
  var revStrArr = revString.split(' ')
  for (var j = revStrArr.length-1; j >=0; j--){
    fwdStrArr.push(revStrArr[j])
  }
  return fwdStrArr.join(' ')
}

/*
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */
 function encode(string){

}
// EX. "aaaabbcddd" => "a4b2c1d3"
// EX. "" => ""
// EX. "bbcc" => "bbcc"
