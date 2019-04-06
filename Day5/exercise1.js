const exp = require("express");
const axios = require("axios");
var app = exp();
app.set("case sensitive routing", true);
app.set("strict routing", true);
app.set("x-powered-by", false);
app.set("trust proxy", true);
app.get("/users", async (req, res) => {
  console.log(`processing...`)
  try {
    let result = await axios.get("https://randomuser.me/api/?results=10");
    console.log(result.data);
    app.set({
      "Cache-control": "private, max-age = 86400",
      "Last-modifier": new Date(),
      "Link": `<https://randomuser.me/api/?results=10&page=1>; rel = "first",
        <https://randomuser.me/api/?results=10&page=2>; rel = "next"`
    });
    res.json(result.data);
  } catch {
    res.send("error");
  }
});
app.listen(8080, () => console.log("listening on 8080"));
