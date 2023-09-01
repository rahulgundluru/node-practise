
const cp = require("child_process")

// cp.execSync("calc")

// cp.execSync("start chrome https://www.scalar.com/topics/")

console.log("output " + cp.execSync("node demo.js"))

