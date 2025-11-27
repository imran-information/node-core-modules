const crypto = require('crypto')

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex");
console.log("input pass" + "password123");
console.log("\n md5 HashedPassword: ", md5Hash);


const sha256Hash = crypto.createHash('sha256').update("password123").digest('hex');

console.log("\n input pass" + "password123");
console.log("\n sha256 HashedPassword: ", sha256Hash);

const sha512Hash = crypto.createHash('sha256').update("password123").digest('hex');

console.log("\n input pass" + "password123");
console.log("\n sha512 HashedPassword: ", sha512Hash);