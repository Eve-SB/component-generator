const fs = require("fs");

module.exports = function createStylesFile(path, componentName) {
    // Styles file
    fs.writeFileSync(
        `${path}/${componentName}.scss`,
        `// This is a comment to start ${componentName} styles
.ui-${componentName} {
    // Your styles here
    // Organise your code using BEM conventions
}
        `
    );
}