# Day05 - Assignments

You can find day-05 related code in [here](https://github.com/Ghosh-95/react-food-app)

### Q1. What is the difference between `named`, `default` and `* as` export?

We can access differnt scripts insdie others using ES6 modules. Modules is just a type of script, just a file. One script is one module, there can be only one module per file.

Modules use special derivatives `export` and `import` to interchange functionalities/code-pieces.

`export`: It labels variables and functions that should be accessible from outside of the current module.

- There are different ways to  export a piece of code from a module:
    - `named export`: We can export a code-block by its name, these type of exports are called named export. We have to import a named-export by it's name inside a curlly brace. The name of the import has to be same as the export. A file can have multiple named exports.

        ~~~javascript
        export function addNum(a, b) {
            return a + b;
        };

        // OR

        function addNum(a,b) {
            return a + b;
        };

        const URL = 'https://www.google.com';
        
        export {addNum, URL};

        // To import the named export
        import {addNum, URL} from './path'
        ~~~
    - `default export`: Another way is to export a code-block by default, called default export. A file can have only one default export. We must ommit the curly-braces while importing a default export. We can use any name independently while importing a default export.
        ~~~javascript
        export default function multiplyByTwo(num) {
            return num * 2;
        };

        // OR

        function multiplyByTwo(num) {
            return num * 2;
        };
        export default multiplyByTwo;
        
        // To import the default import
        import multiplyByTwo from './path'
        ~~~

    - `* export`: We can export multiple functionalities form a file. As the sign suggest, it is used to import the whoel module as a export.
        ~~~javascript
        export function multiplyByTwo(num) {
            return num * 2;
        };

        // OR

        export function divideByTwo(num) {
            return num / 2;
        };

        // To import the default import
        import * as mathOperation from './path';

        // Now we can use those functionalities like this:

        mathOperation.multiplyByTwo(5);
        mathOperation.divideByTwo(12);
        ~~~

### Q2. What is the importance of `config.js` file?

config.js is initially a configuration file that contains inoformation which are required to run a program. It is structured in a way that users can format based on their necessity. They are used for user application, server process and operating system.
- Some programs checks configuration files at the startup for certain changes of any information related to program.

### Q3. What are React Hooks? 

React hooks are JavaScript functions that allow us to use some core features of React. They let us 'hooked' into React features.
Hooks are only available while React is rendering.
>You can either use built in hooks or you can combine them to build your own.

### Q4. Why do we need a useState Hook?
Component often need to change what's on the sceen as a result of an interaction. Component needs to remember thing: the current input value, the current image state etc. In React these type of component specific memory is called State.

 A regular variable is not enough to re-render a component, after changing something.
- Local variable doesn't persist between renders. When React renders a component, it renders from scracth - as a result it doesn't consider any changes in the local variable
- Changes to local variable do not trigger rendering. React doesn't realize that it needs to render with the new data(re-rendering).

Specifically, to update a component with new data, two things need to happen:
- Retain/Remember the data between the randers
- Trigger React to re-render the component with new data.

useState hook provides exactly those two things:
- A 'state' variable that retains the data between renders.
- A 'stateSetter' function that updates the variable and trigger re-render.
```javascript
const [state, setState] = useState('local value');
```