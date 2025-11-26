const fs = require('fs');

console.log("Started read file");

// try {
//     const readFile = fs.readFileSync("text.tex", 'utf-8')
//     console.log(readFile);

// } catch (error) {
//     console.error(error.meassage);
// }
// console.log("Readfile red end");

const result = fs.readFile("text.tex", "utf-8", (error, readText) => {
    if (error) {
        console.log(error.message);
    }
    console.log(readText);

})

console.log("Readfile red end");
