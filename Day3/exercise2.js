const event = require("events");
class Gym extends event {
  constructor() {
    super();
    setInterval(() => {
      this.emit("boom");
    }, 1000);
  }
}
let gym = new Gym();
gym.on("boom", () => console.log("Athlete is working out"));
