const { Observable } = require("rxjs");
const os = require("os");

(function checkSystem() {
  console.log("Checking your system...");
  const obs$ = Observable.create(function (observe) {
    const cpus = os.cpus().length;
    const mem = os.totalmem();
    if (mem <= Math.pow(2, 32)) {
      observe.next("This app needs at least 4GB of RAM");
      observe.complete();
    }
    if (cpus <= 2) {
      observe.next("Processor is not supported");
      observe.complete();
    }
    observe.next("System is checked successfully");
    observe.complete();
  });
  obs$.subscribe(x => console.log(x));
  console.log("j");
})();
