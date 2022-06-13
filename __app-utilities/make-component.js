const fs = require("fs");
const args = process.argv.slice(2);

function createComponentsDirectory() {
    // Create components directory if one does not exist
    fs.mkdirSync("./src/components", {recursive: true});
}

function createStoriesFile(path, componentName) {
    // Stories file
    fs.writeFileSync(
        `${path}/_stories/${componentName}.stories.ts`,
        `// This is a comment to start ${componentName} stories`
    );
}

function createTestsFile(path, componentName) {
    // Tests file
    fs.writeFileSync(
        `${path}/_tests/${componentName}.specs.ts`,
        `// This is a comment to start ${componentName} tests`
    );
}

function createStylesFile(path, componentName) {
    // Styles file
    fs.writeFileSync(
        `${path}/${componentName}.scss`,
        `// This is a comment to start ${componentName} styles`
    );
}

function createScriptsFile(path, componentName) {
    // Scripts file
    fs.writeFileSync(
       `${path}/${componentName}.ts`,
       `// This is a comment to start ${componentName} scripts`
   );
} 

function createVueComponentFile(path, componentName) {
    // Vue component file
    fs.writeFileSync(
        `${path}/${componentName}.vue`,
        `// This is a comment to start ${componentName} component`
    );
}

function createReadmeFile(path, componentName) {
    // Vue component file
    fs.writeFileSync(
        `${path}/README.md`,
        `# ${componentName} component`
    );
}

function generateComponent(componentName) {

    console.log(`Creating a component...`);

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
        console.log(`${componentName} component's directory already exists! Terminating the task...`);
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
    createVueComponentFile(path, componentName);
    createReadmeFile(path, componentName);

    console.log(`${componentName} component created`);
}

createComponentsDirectory();
generateComponent(args[0]);