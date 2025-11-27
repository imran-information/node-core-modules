const fs = require("fs");
const path = require('path');

const sourceDir = path.join(__dirname, "organized-output", "my-created-files");
const organizerDir = path.join(__dirname, "organized-output", "organized");

const categories = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
};

const testFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip",
];

function initializedDirectories() {
    if (!fs.existsSync(sourceDir)) {
        fs.mkdirSync(sourceDir, { recursive: true });

        testFiles.forEach((files) => {
            fs.writeFileSync(path.join(sourceDir, files), `Content of ${files}`)
        })
    }
    console.log("My-created-files created successfully...");


    if (!fs.existsSync(organizerDir)) {
        fs.mkdirSync(organizerDir, { recursive: true })
    }

    Object.keys(categories).forEach(category => {
        const categoryPath = path.join(organizerDir, category);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath)
        }
    })
}


function getCategories(filename) {
    const extname = path.extname(filename).toLowerCase();
    for (const [category, extensions] of Object.entries(categories)) {
        if (extensions.includes(extname)) {
            return category
        }
    }
    return "others"
}

function organizedFiles() {
    console.log("file organized");
    console.log("Source ", sourceDir);
    console.log("Destination ", organizerDir);
    console.log("\n" + "-".repeat(60) + "\n", organizerDir);

    const files = fs.readdirSync(sourceDir)
    if (files.length === 0) {
        console.log("No file to worked on");
        return;
    }
    console.log(`found ${files.length} files to organize \n`);

    const stats = {
        total: 0,
        byCategory: {},
    }

    files.forEach(file => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            return;
        }

        const category = getCategories(file);
        const destDir = path.join(organizerDir, category)
        const destPath = path.join(destDir, file)

        fs.copyFileSync(sourcePath, destPath);

        stats.total++;
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;

        console.log(file);
        console.log(category);
        console.log(stat.size);

    });
};

function showHelp() {
    console.log(`file organizer - usage
        
        commands: 
        init - create files
        organize -  organize files into categories

        example: 
        node file-organizer.js init
        node file-organizer.js organize
        `);
}

const command = process.argv[2];

switch (command) {
    case "init":
        initializedDirectories()
        break;
    case "organize":
        organizedFiles();
        break;
    default:
        showHelp()
        break;
}