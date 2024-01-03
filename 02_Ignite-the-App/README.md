# Assignments: Day-02

### What is Trasitive Dependency?
While developing a project, developers will pull in dependencies written by a third party to achieve a task. This is done because it tends to be easier to rely on a library which is the main focus of its developer, rather than reinventing the wheel just to build a car.

When a programmer explicitly declares a dependency in their project (such as via NPM), those are called **Direct Dependencies** because they are used directly by the developer. They’re often the dependencies the developers are considering when asked what third-party dependencies are gonna be used in their project.

A **Trasitive Dependency** is one not imported directly into the project at hand, but imported by a direct dependency or another transitive dependency.
