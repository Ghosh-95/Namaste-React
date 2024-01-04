# Assignments: Day-02

### Q1. What is Transitive Dependency?
While developing a project, developers will pull in dependencies written by a third party to achieve a task. This is done because it tends to be easier to rely on a library which is the main focus of its developer, rather than reinventing the wheel just to build a car.

When a programmer explicitly declares a dependency in their project (such as via NPM), those are called **Direct Dependencies** because they are used directly by the developer. They’re often the dependencies the developers are considering when asked what third-party dependencies are gonna be used in their project.

A **Transitive Dependency** is one not imported directly into the project at hand, but imported by a direct dependency or another transitive dependency.

### Q2. What is `npm` ?

**npm** is the world's largest software registry. A developer can find, manage and build code packages. When used as a dependency manager for a local project, npm can install all the dependencies of a project through package.json file with one command. npm doesn't itself run any packages. If you want to run any package using npm, you must specify the package into `package.json` file. You can run a locally installed package by adding it into your package.json file in the scripts section, like this:

~~~
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

