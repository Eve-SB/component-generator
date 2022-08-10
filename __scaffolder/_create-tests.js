const fs = require("fs");

module.exports = function createTestsFile(path, componentName) {
    // Tests file
    fs.writeFileSync(
        `${path}/_tests/${componentName}.specs.ts`,
        `// This is a comment to start ${componentName} tests`
    );
}
