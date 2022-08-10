const fs = require("fs");

module.exports = function createTemplateFile(path, componentName) {
    // Vue component file
    fs.writeFileSync(
        `${path}/${componentName}.vue`,
        `// This is a comment to start ${componentName} component`
    );
}