const dns = require("dns");
const util = require("util");
dns.resolve4("www.mum.edu", function(err, addresses) {
  console.log(addresses);
});
const promise = util.promisify(dns.resolve4);
promise("www.mum.edu").then(data => console.log(data));
(async function aSync() {
  try {
    let result = await promise("www.mum.edu");
    console.log(result);
  } catch {
    console.log("error");
  }
})();
