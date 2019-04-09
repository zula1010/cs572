const { of, from } = require("rxjs");
const { BehaviorSubject } = require("rxjs");
const { map, filter } = require("rxjs/operators");
let obj$ = new BehaviorSubject("k");
obj$.subscribe(console.log);
// obj$.subscribe(console.log);
// obj$.subscribe(x => console.log(x));
obj$.next("aaa");

obj$.subscribe(console.log);
obj$.next("bb");
obj$.subscribe(console.log);
