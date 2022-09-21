const fs = require("fs");

module.exports = function createScriptsFile(path, componentName) {
    // Scripts file
    fs.writeFileSync(
       `${path}/${componentName}.ts`,
       `// This is a comment to start ${componentName} scripts`
   );
} 