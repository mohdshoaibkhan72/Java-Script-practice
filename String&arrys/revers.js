//revsing the all the words in a string ....

var str = "eras ahaj es ahca anatudniH aramh";


const savestr = str.split(" ").map(function (word) {
  return word.split("").reverse().join("");
});
console.log(savestr.join(" "));


// const savestr=str.split("");
// console.log(savestr);
// ooutput
// [
//     's', 'a', 'r', 'e', ' ', 'j',
//     'a', 'h', 'a', ' ', 's', 'e',
//     ' ', 'a', 'c', 'h', 'a', ' ',
//     'H', 'i', 'n', 'd', 'u', 't',
//     'a', 'n', 'a', ' ', 'h', 'm',
//     'a', 'r', 'a'
//   ]