const { from } = require("rxjs");
// String.prototype.filterWords = function(words) {
//   let s = this;
//   for (let val of words) {
//     s = s.replace(val, "***");
//   }
//   return s;
// };
String.prototype.filterWords = function(words) {
  let reg = new RegExp(words.join("|"), "gi");
  return this.replace(reg, "***");
};
const promise = function() {
  return new Promise(function(resolve) {
    resolve("This house is nice!".filterWords(["house", "nice"]));
  });
};
async function aSync() {
  try {
    let result = await promise();
    console.log(result + "async await finished");
  } catch {
    console.log("error");
  }
}
from(promise()).subscribe(e => console.log(e + "observable finished"));
console.log("This house is nice!".filterWords(["house", "nice"]));
console.log("ES6 finished");
promise().then(data => console.log(data + "Promise finished"));
aSync();
