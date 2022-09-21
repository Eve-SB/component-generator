const fs = require("fs");

module.exports = function createStoriesFile(path, componentName) {
    // Stories file
    fs.writeFileSync(
        `${path}/_stories/${componentName}.stories.ts`,
        `// This is a comment to start ${componentName} stories`
    );
}