const fs = require("fs");

module.exports = function createReadmeFile(path, componentName) {
    // Vue component file
    fs.writeFileSync(
        `${path}/README.md`,
        `# ${componentName} component`
    );
}