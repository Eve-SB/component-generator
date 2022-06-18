# Simple node component scaffolding utility
When working on large UI libraries, it soon becomes evident that creating directories for components is one tedious task that needs to be automated.

This utility tool was written to address that issue.

To be clear, this is not the only tool of this kind, and you can find many npm packages doing a similar thing; however, they all require some setup or are written for a specific framework.

This tool, however, is written in basic JavaScript; you do not need to install it, there is a minimal learning curve if you are already comfortable with JS, and it is also easy to extend if that is what you are after.

This tool was designed to be simple to use and easy to adjust to your project's needs.

## Basic setup:

_**Prerequisites:** The tool uses node.js to generate files, so you should have it initiated in your project._

To use the scaffolding tool, you will need to do take these steps:
1. Copy `__scaffolding-tool` directory with its contents to the root of your project
2. Add a script `"make:component": "node ./__scaffolding-tool/make-component.js"` to your package.json file.
3. And then, run this script in the terminal from the root folder of your project: `npm run make:component [[your component's name]]`

The script will do a couple of things:
1. It will create a `./src` folder if one does not exist.
2. Then, it will create a `./src/components` folder if one does not exist.
3. Lastly, it will take the name of the component that was entered in a terminal and generate a directory `./src/components/[[your component's name]]` with all files and folders defined in the `./__scaffolding-tool/make-component.js` file.

## How this tool works:

In many projects, the file structure for UI components always looks the same. Here is one from my recent project:

```
├─ component
    ├─ _stories
        └─ component.stories.ts
    ├─ _tests
        └─ component.specs.ts
    ├─ component.scss
    ├─ component.ts
    ├─ component.vue
    └─ README.md
```

Here, all our components have a folder and file for Storybook stories, a folder and file for unit tests, and separate files for styles, scripts, a template and documentation. And no matter who works on the project, they always use this structure for all UI components, as this is a requirement of our Pull Request (PR) process.

This structure is defined in the `./__scaffolding-tool/make-component.js` file.

And we can generate a component directory by simply running a script in the terminal from the root folder of the project:

`npm run make:component [[your component's name]]`

Credits:

[A YouTube video which gave me an](https://www.youtube.com/watch?v=U9lSmRBPqFY2arg)
