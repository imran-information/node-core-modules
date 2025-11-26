const fs = require("fs");

fs.writeFileSync("./outputDeleteFile/temp1.tex", "temporary file created...")
console.log("Temporary file created...")


if (fs.existsSync("./outputDeleteFile/temp1.tex")) {
    console.log("Temporary file exists");
    fs.unlinkSync("./outputDeleteFile/temp1.tex", (error) => {
        console.error(error.meassage);
    })
    console.log("Temporary file Deleted");
}


// try {
//     fs.unlinkSync("./outputDeleteFile/temp1.tex")
// } catch (error) {
//     console.error(error);
// }

