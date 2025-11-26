const fs = require('fs');

const content2 = " This is content 2... \n Node js JOSS akta Jinis..."

console.log("Writeen Started...");

fs.writeFile("./outputWriteFile/contentFile_2.tex", content2, (error, result)=> {
    if (error) {
        console.error(error.meassage);
    }
    console.log("Content File writeen..");
});


console.log("Writeen End...");