# Day04 - Assignments

### Q1. Is JSX mandatory for React?

Actually, no, we don't necessarilly need to use JSX in React. We can use React.createElement() istead. But createElement() is repetitive and creates a mess in the code base. That's why we use JSX as it is more like HTML markups, it is easier to use, read and debug.

### Q2. Is ES6 mandatory for React?

ES6 or ECMAScript 6 is a JS update where a lot of new feature came to JavaScript in 2015. It makes easy to write code in JS as it launches new features like Arrow Functions, new loops (map, filter, reduce), destructing and spreading etc.

>In react it is easier to use ES6 concepts as is short and quick to read. So using ES6 in React appears helpful.

### Q. What is Config Driven UI? 

A technique that allows to create user interfaces based on a configuration file, such as JSON or a Typescript file that defines the layout and content of the UI components.

So the UI is built and configured by a declarative configuration file, or a data structure, than being hardcoded. The config file, or data structure, contais all the information about the structure of the UI; such as the layout of the elements, properties and behaviour of the each element and any data sources or API that the UI interacts with.

- Using Config driven UI approach, the UI can be easily modified and customized without requiring changes to the underlying code base. This makes easier to maintain, extend or scale the UI, and causing rapid development also.

There are many frameworks support building config driven UI:
- `React`: React provides a flexible and powerful way to build UIs using a component based architecture, which can be easily configured by using **states** and **props**