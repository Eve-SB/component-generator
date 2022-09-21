const fs = require("fs");

module.exports = function createTemplateFile(path, componentName) {
    // Vue component file
    fs.writeFileSync(
        `${path}/${componentName}.vue`,
        `
<template>
    // This is a comment to start ${componentName} component \n
</template>

<script lang="ts" src="./${componentName}.ts"></script>
<style scoped lang="scss" src="./${componentName}.scss"></style>
        `
    );
}