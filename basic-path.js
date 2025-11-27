const paths = require("path")


console.log("\n dirname", __dirname);
console.log("\n filename", __filename, "\n");

console.log("-".repeat(100));

console.log("\n basename-->", paths.basename(__filename))
console.log("\n dirname-->", paths.dirname(__dirname))
console.log("\n extname-->", paths.extname(__filename))
console.log("\n format-->", paths.parse(__dirname))


