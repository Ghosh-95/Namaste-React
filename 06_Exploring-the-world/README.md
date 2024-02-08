# Day06 - Assignments

You can find day-06 related code in [here](https://github.com/Ghosh-95/react-food-app)

```
'Loose coupling' is an approach to interconnecting the components in a system, network or software application so that those components depend on each other to the least extent practicable. Coupling refers to the degree of direct knowledge that one element has of another.

Loose coupling reduces the risk that a change made in one component, such as a database or user interface, creates un-anticipated changes in other parts. Limiting interconnections can help isolate problems when an error occurs and simplify testing, maintenance and troubleshooting procedures.
```

### Q1. What is a microservice?

Microsevices - also known as microservice architecture - is an architectural approach that structures an application as a collection of small, independent and loosely coupled services. Services are typically organized by business capabilities. Each service is often maintained by a single team.

The microservice architecture enables a organization to deliver a large, complex applications rapidly, frequently, reliably and sustainably - a necessity for competing and winning in today’s world.

### Q2. What is monolithic architecture?

Monolithic application is designed to be self-contained, wherein the program's components or functions are tightly coupled rather than loosely coupled. In a monolithic architecture, each component and its associated components must all be present for code to be executed or compiled and for the application to run.

Monolithic applications tend to have larger codebase as multiple components are combined into one large application. As a result they can be troublesome to maintain and debug.

Furthermore, if one program component must be updated, other elements may also require rewriting, and the whole application has to be recompiled and tested. The process can be time-consuming and may limit the agility and speed of software development teams.

### Q3. What is the difference between monolith and microservice architecture?

With monolithic architectures, all processes are tightly coupled and run as a single service. This means if one process of the application experiences a change in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features become more complex as the code base grows large over time. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a microservices architecture, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.

![monolith and microservice architecture](./monolith-microservice.png)

### Q4. Why do we need a useEffect Hook?
useEffect hook lets you synchronize a component with external system.
```javascript
useEffect(setup, dependencies?);
```

useEffect receives two arguments:
- A setup function with setup code that connects to the external system
- A list of dependencies including every value from your component used inside of setup function.

An Effect lets you keep your component synchronized with some external system (like a chat service). Here, external system means any piece of code that’s not controlled by React, such as:

- A timer managed with setInterval() and clearInterval().
- An event subscription using window.addEventListener() and window.removeEventListener().
- A third-party animation library with an API like animation.start() and animation.reset().
>If you’re not connecting to any external system, you probably don’t need an Effect.

### Q5. What is Optional Chaining?
The optional chaining (?.) operator accesses an object's property or calls a function. The `?.` operator is like the (.) chaining operator, except that instead of causing an error if a reference is `nullish` (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

### Q6. What is Shimmer UI?
Conventional web or mobile apps used to display a loading spinner while the data is taking some time to load. This reduces UX and user engagement as user can't predict what kind of data is being loaded. 

A better way of showing loading stats is to use a Shimmer UI. A Shimmer UI doesn't contain the actual content, rather it mimics the layout and shapes of contents that will eventually appear. It gives user a sense of motion and progress and as a result increasing user expreiences.

### Q7. What is the difference between JS expression and JS statement?
`Expreession`: At its core, an expression is a bit of JavaScript code that produces a value.
For example, these are all expressions:
```js
1 → produces 1
"hello" → produces "hello"
5 * 10 → produces 50
```
Expression can contain other expression. For example, the code below contains 3 expressions:
```js
(3 + 1); // (3 + 1), 3 and 1
```
`Statemens`: A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something. Here are some examples of statements:
```js
let a = 5;

if(isTrue) {
    // More statements here
};

throw new Error("Some error occurred");
```
One can say that statements are structures that holds a program together while expressions fill in the details. Statements often have 'slots' for expressions, expression just fills the slots. For example a variable statement has a slot of expression:
```js
const variable = /* here goes some expression */;

// We can use any of the expreessions in that slot:

const num = 1;
const greet = "Hello";
const multipy = 5 * 10;
```

### Q8. What is Conditional Rendering? Explain with a code example.
Conditional Rendering is to render certain UI based on the condition given, using conditional operators.
```js
// using if...else statement
if(isLogged) {
    <UserAccount />
} else <LogInPage />

// we can use ternary operator
isLogged ? (<button>Log Out</button>) : (<button>LogIN</button>)

// using logical operator
isLogged && (<button>Log Out</button>);
```
### Q9. What is CORS?
CORS (Cross-orgin Resource Sharing) used to manage cross-origin requests. It is a mechanism that allows a page to request resources from another domains outside of its own.
- It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request.
- CORS allows servers to specify who can access the assets on the server among other things.

> A cross-origin request is a request for a resource e.g. stylesheets, iFrames, images, fonts or scripts from another domain.

### Q10. What is async and await?
`async` function declaration always returns a new promise each time it is called. The promise will be resolved with the value returned by the async function, or rejected with an uncaught error occurs within the async function. An async funtion executes asynchronounsly, therefore it doesn't block the main thread of execution.

`await` keyword makes a JavaScript promise wait until it settles and return its results. await literally suspend function execution untill the promise settles, in the mean time JS engine can perform other tasks.
> await can only be used inside a async function. We cannot use await in top-level code or inside any regular function.

> `Top-level await`: Allows developer to use await outside async function. It only works at the top level of modules.

### Q11. What is the use of `const json = await data.json();` in getRestaurants() ?

fetch() functions are used for network requests and they always returns a promise. As we previously discussed, await literally stops the execution until promise settles and returns the response object. The response object is usually in json format, in order to extract the actual data we need to use `.json()` method wchich returns another promise. We need to use another await to handle the promise returned by `.json()` method.
```js
async function fetchData(url) {
    const response = await fetch(url); // returns response object with another promise
    const data = await response.json(); // extracting data from the fulfilled state of second promise

    // now we can actually use the data
    console.log(data); // prints the data object.
}
```
----