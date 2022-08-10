const fs = require("fs");
const args = process.argv.slice(2);
const createStoriesFile = require("./_create-stories.js");
const createTestsFile = require("./_create-tests.js");
const createStylesFile = require("./_create-styles.js");
const createScriptsFile = require("./_create-scripts.js");
const createTemplateFile = require("./_create-template.js");
const createReadmeFile = require("./_create-readme.js");

function createComponentsDirectory() {
    // Create src and components directories if they do not exist
    fs.mkdirSync("./src/components", {recursive: true});
}

function generateComponent(componentName) {
    const componentNameCap = componentName.trim().replace(/^\w/, (c) => c.toUpperCase());

    console.log(`🏁 Creating a ${componentName} component...`);

    // First, check if component's name was defined
    // Terminate the function if undefined

    if (componentName === undefined) {
        console.log(`WARNING --- Please define component's name`)
        return;
    }

    const path = `./src/components/${componentName}/`;

    // Then, check if component's directory is a new one
    // Terminate the function if it already exists

    if (fs.existsSync(path)) {
        console.log(`🔴 ${componentNameCap} component's directory already exists! Terminating the task...`);
        return;
    } 

    // And only then generate some files

    // First, create component's folders

    // Stories and tests folders, if they do not exist
    fs.mkdirSync(`${path}/_stories`, {recursive: true});
    fs.mkdirSync(`${path}/_tests`, {recursive: true});

    // And then, create files
    createStoriesFile(path, componentName);
    createTestsFile(path, componentName);
    createStylesFile(path, componentName);
    createScriptsFile(path, componentName);
    createTemplateFile(path, componentName);
    createReadmeFile(path, componentName);

    console.log(`✅ ${componentNameCap} component created`);
}

createComponentsDirectory();
generateComponent(args[0]);