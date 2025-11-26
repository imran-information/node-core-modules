const fs = require('fs');

//  file create
fs.writeFileSync('./appendFileOutPut/userLogendFile.tex', "Aplication Started", (error) => {
    if (error) {
        console.error(error.meassage);
    } else {
        console.log("userLogendFile Created...");
    }
})

const userEntry1 = `\n${new Date().toISOString()} User logged in successfully.`;

fs.appendFileSync("./appendFileOutPut/userLogendFile.tex", userEntry1, (error) => {
    if (error) {
        console.error(error.meassage);
    }
    console.log("User fetched data successfully.");
});
const userEntry2 = `\n${new Date().toISOString()} User fetched data successfully.`;

fs.appendFileSync("./appendFileOutPut/userLogendFile.tex", userEntry2, (error) => {
    if (error) {
        console.error(error.meassage);
    }
    console.log("User fetched data successfully.");
});

