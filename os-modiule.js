const os = require("os");

console.log("OS Type:", os.type());
console.log("\nPlatform:", os.platform());
console.log("\nArch:", os.arch());
console.log("\nCPU Info:", os.cpus());
console.log("\nTotal RAM:", os.totalmem() / 1073741824), + "GB";
console.log("\nFree RAM:", os.freemem() / 1073741824), + "GB";
console.log("\nHome Dir:", os.homedir());
console.log("\nHostname:", os.hostname());
console.log("\nUptime:", os.uptime());
console.log("\nNetwork Interfaces:", os.networkInterfaces());
console.log("\nTemp Dir:", os.tmpdir());
console.log("\nVersion:", os.version());
console.log("\nEOL:", JSON.stringify(os.EOL));
console.log("\nEndianness:", os.endianness());
console.log("\nAvailable Parallelism:", os.availableParallelism());
