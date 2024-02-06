# Day05 - Assignments


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