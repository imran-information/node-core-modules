const fs = require("fs");

const content1 = ' This is 1st content \n Node JS is awsome..!!!';

console.log("Writeen Started...");


try {
    fs.writeFileSync("./outputWriteFile/contentFile_1.tex", content1) 
    console.log("Content File writeen");
    

} catch (error) {
    console.log(error);

}

console.log("Writeen End...");