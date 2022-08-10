# Simple Node.js component scaffolding utility
When working on large UI libraries, it soon becomes evident that creating directories for components is one tedious task that needs to be automated.

I wrote this utility tool to address that issue.

To be clear, you can find many npm packages doing a similar thing; however, they all require some setup or are written for a specific framework.

This tool, however, is written in basic JavaScript; you do not need to install it, there is a minimal learning curve if you are already comfortable with JS, and it is also easy to extend if that is what you are after.

I have built this tool to be simple to use and easy to adjust to any project's needs.

## Basic setup:

_**Prerequisites:** The tool uses node.js to generate files, so you should have it initiated in your project. It would also help to know how to use command line/terminal._

To use the scaffolding tool, you will need to take these steps:
1. Copy `__scaffolder` directory with its contents to the root of your project
2. Add a script `"make:component": "node ./__scaffolder/make-component.js"` to your package.json file.
3. And then, run this script in the terminal from the root folder of your project: `npm run make:component [[your component's name]]`

The script will do a couple of things:
1. It will create a `./src` folder if one does not exist.
2. Then, it will create a `./src/components` folder if one does not exist.
3. Lastly, it will take the name of the component you entered in a terminal and generate a directory `./src/components/[[your component's name]]` with all files and folders defined in the `./__scaffolder/` directory's `create` and `make` files.

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

Here, all our components have a folder and file for Storybook stories, a folder and file for unit tests, and separate files for styles, scripts, a Vue template and documentation. And no matter who works on the project, they will always use this structure for all UI components, as this is one of the requirements of our Pull Request (PR) process.

And we can generate a component directory by simply running a script in the terminal from the root folder of the project:

`npm run make:component [[your component's name]]`

To edit this structure, have a look at individual files inside of `./__scaffolder/` directory. 

All `_create-xxx.js` files contain snippets of code for generating individual directories and files. The `make-component.js` file brings it all together, and is used in the sript we added to our `package.json` file. All these files can be edited to match your requirements.

**Credits:**
[A YouTube video](https://www.youtube.com/watch?v=U9lSmRBPqFY2arg) which gave me an idea.
