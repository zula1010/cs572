Array.prototype.even = function() {
  let arr = this;
  new Promise(function(resolve) {
    resolve(arr.filter(x => x % 2 == 0));
  }).then(data => console.log(data));
};

Array.prototype.odd = function() {
  let arr = this;
  new Promise(function(resolve) {
    resolve(arr.filter(x => x % 2 == 1));
  }).then(data => console.log(data));
};
console.log("start");
[1, 2, 3, 4, 5, 6, 7, 8].even();
[1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log("end");
