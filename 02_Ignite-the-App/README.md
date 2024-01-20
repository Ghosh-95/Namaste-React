# Assignments: Day-02

### Q1. What is Transitive Dependency?
While developing a project, developers will pull in dependencies written by a third party to achieve a task. This is done because it tends to be easier to rely on a library which is the main focus of its developer, rather than reinventing the wheel just to build a car.

When a programmer explicitly declares a dependency in their project (such as via NPM), those are called **Direct Dependencies** because they are used directly by the developer. They’re often the dependencies the developers are considering when asked what third-party dependencies are gonna be used in their project.

A **Transitive Dependency** is one not imported directly into the project at hand, but imported by a direct dependency or another transitive dependency.

### Q2. What is `npm` ?

**npm** is the world's largest software registry. A developer can find, manage and build code packages. When used as a dependency manager for a local project, npm can install all the dependencies of a project through package.json file with one command. npm doesn't itself run any packages. If you want to run any package using npm, you must specify the package into `package.json` file. You can run a locally installed package by adding it into your package.json file in the scripts section, like this:

~~~json
{
  "name": "your-application",
  "version": "1.0.0",
  "scripts": {
    "your-package": "your-package"
  }
}
~~~

Then you can run the script using `npm run`:

~~~
npm run your-package
~~~

### Q3. What is `npx` ?

**npx**, the package runner, also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry. It is usually used to execute packages.

Like, if you want to execute a locally installed package, all you need is to type:

~~~
npx your-package
~~~

### Q4. What is Parcel/Webpack? Why do we need it?

Parcel are Webpack are web application bundlers used for development and productions purposes or power our application with different type of functionalities and features. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel can take any type of file as an entry point, but an HTML or JavaScript file is a good place to start. Parcel/Webpack are type of bundlers that we use to power our application with different type functionalities and features.

Parcel provides:
- HMR (Hot Module Replacement) - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
- File watcher algorithm - made with C++
- Minification
- Cleaning our code
- development and production Build
- Super fast building algorithm
- Image optimization
- Caching while development
- Compresses
- Compatible with older version of browser
- HTTPS in dev
- Port Number
- Consistent hashing algorithm
- Zero Configuration
- Automatic code splitting

### Q5. What is `.parcel-cache`?

`.parcel-cache` is used by parcel(bundler) to reduce the building time. It stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

### Q6. What is difference between dependencies vs devDependencies?

Both are types of dependencies with different use cases. Both of them gets included when we install any package.

`dependencies` containes packages that are used for local development and testing.
And packages in `devDependencies` are the packages that are required by the application in production.

### Q6. What is Tree Shaking?

We often write some code that we don't acutally use in the overall development of a project. These piece of codes are call `Dead Code`. Tree Shaking is a term, commonly used within JavaScript, that describes removal of the dead codes.

It reliees on the `import` and `export` statements to detect if code modules are imported and exported for used between JavaScript files.

### Q7. What is Hot Module Replacement?

Hot Module Replacement or **HMR** is a feature that adds, removes, or exchanges modules while an application is running without the full reload of the webpage. This can boost up development in few ways:

- Retain the application state which was lost during full reload.
- Instantly update the browser when modifications are made to CSS/JS in the source code, which is almost comparable to changing styles directly in the browser's dev tools.
- Save valuable development time by only updating what's changed.

### Q9. - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

1. `HMR`(Hot Module Replacement)
2. `Image Optimization`
3. `File Watcher Algorithm`
4. `Minification` (A process where Parcel minimizes code and markup in HTML and script files.)
5. `Caching`

### Q8. What is `.gitignore`? What should we add and not add into it?

.gitignore is a type of text files that tells Git which files to ignore while commiting to a repository. A developer should consider putting all the files that are not needed to get commited, in .gitignore file. `package.json` file should not be included in .gitignore file.

This is an example of what the .gitignore file looks like:
~~~
# Ignore 'node_modules' folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
~~~

### Q9. What is the difference between `package.json` and `package-lock.json`?

- `package.json`: This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, scripts, and other configuration details. It acts as a manifest for the project.

- `package.lock.json`: This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different environments.

### Q10. Why should I not modify `package-lock.json`?

A developer should never modify package.lock.json, as it contains exact version of all the dependencies that are used in current project. Modifying this file will cause error in development and production phase.

### Q11. What is `node_modules` ? Is it a good idea to push that on git?

**node_modules** is folder that work like a cache file in the development of a project. npm installs all the necessarry files,based on the dependencies mentioned in package.josn, and get stored in node_modules folder.

It is not a good practice to push node_modules in gitHub as it is large in size and can consume unnecessarry memory. A hosting website will always download all the node_modules file themselves based on package.json.

### Q12. What is the dist folder?

The `/dist` folder contains the minimized version of the source code. The code present in the `/dist` folder is actually the code which is used on production of web applications. Along with the minified code, the `/dist` folder also comprises of all the compiled modules that may or may not be used with other systems.

### Q13.  What is `browserslist`?

A `Browserslist` is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.