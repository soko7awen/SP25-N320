#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const app = readline.createInterface({
    output: process.stdout,
    input: process.stdin
});

function quitApp() {
    app.close();
}

function includeSassFolder(callback) {
    app.question("Include Sass Folder? (Y/n): ", (userAnswer) => {
        const cleanedAnswer = userAnswer.trim().toLowerCase();
        if (cleanedAnswer === "y" || !cleanedAnswer) {
            callback(true);
        } else if (cleanedAnswer === "n") {
            callback(false);
        } else {
            includeSassFolder(callback);
        }
    });
}

app.question("Name of Project: ", (projectName) => {
    const baseDirectory = process.env.TEST === "1" ? path.resolve("output") : process.cwd();
    const projectDirectory = path.join(baseDirectory, projectName);
    const templatesDirectory = path.join(__dirname, "templates");
    const defaultTemplateDirectory = path.join(templatesDirectory, "default");
    const cssDirectory = path.join(projectDirectory, "css");
    const sassDirectory = path.join(projectDirectory, "scss");

    const defaultStyle = `* {
  margin: 0;
}
`;

    if (!fs.existsSync(projectDirectory)) {
        fs.mkdirSync(projectDirectory, { recursive: true });
    }

    if (!fs.existsSync(templatesDirectory)) {
        fs.mkdirSync(templatesDirectory);
    }
    
    if (fs.existsSync(templatesDirectory)) {
        fs.cpSync(defaultTemplateDirectory,projectDirectory, { recursive: true });
    }
    
    includeSassFolder((includeSass) => {
        if (includeSass) {
            fs.mkdirSync(sassDirectory);
            let styleFile = path.join(sassDirectory, "style.scss");
            fs.writeFileSync(styleFile, defaultStyle);
        }
        else if (fs.existsSync(cssDirectory)) {
                let styleFile = path.join(cssDirectory, "style.css");
                fs.writeFileSync(styleFile, defaultStyle);
        }
        quitApp();
    });
});
