# Day04 - Assignments

### Read more about [React Fibre](https://github.com/acdlite/react-fiber-architecture)

You can find day-04 related code in [here](https://github.com/Ghosh-95/react-food-app)

### Q1. Is JSX mandatory for React?

Actually, no, we don't necessarilly need to use JSX in React. We can use React.createElement() istead. But createElement() is repetitive and creates a mess in the code base. That's why we use JSX as it is more like HTML markups, it is easier to use, read and debug.

### Q2. Is ES6 mandatory for React?

ES6 or ECMAScript 6 is a JS update where a lot of new feature came to JavaScript in 2015. It makes easy to write code in JS as it launches new features like Arrow Functions, new loops (map, filter, reduce), destructing and spreading etc.

>In react it is easier to use ES6 concepts as is short and quick to read. So using ES6 in React appears helpful.

### Q3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- `{TitleComponent}`: The value describes the 'TitleComponent' as a JavaScript expression or variable. With the help of `{}`, we can embed a JavaScript.

    ~~~javascript
    const headingElement = (<h1>This is an h1 element.</h1>)

    root.render(
        {headingElement}
    )
    ~~~
- `{<TitleComponent/>}`: This value represents a functional component which is returning some JSX. A component is written inside `</>` or `{</>}` expression.

    ~~~javascript
    function TitleComponent(){
        return (
            <h1>This component is returning a heading.</h1>
        );
    };

    root.render(
        <TitleComponent />
    )

    // OR
    root.render(
        {<TitleComponent />}
    )
    ~~~
- `<TitleComponent></TitleComponent>`: `<TitleComponent/>` and `<TitleComponent></TitleComponent>` are equivalent to one another only when 'TitleComponent' has no children. Openinig and Closing tags are created to include child components.

    ~~~javascript
    function DivComponent(){
        return (
            <div className="container"><div/>
        );
    };

    function ParaComponent(){
        return (
            <p class="children">This is a paragraph</p>
        );
    };

    root.render(
        <>
            <DivComponent>
                <ParaComponent />
            <DivComponent/>
        </>
    )
    ~~~

### Q4. How can I write comments in JSX?

Just like any other languages, JSX has comment facilities too. To put comments in JSX, we can use `{/**/}` syntax to wrap around the text.

```javascript
function Card() {

    return (
        <>
            <div className="card">
            {/* <div className="card-content"></div>*/}
            </div>
        </>
    )
}
```

### Q5. What is `<React.Fragment></React.Fragment>` and `<></>` ?

> <React.Fragment> is depricated now. Use `<Fragment>` instead.

`<Fragment>`, often used via <>...</> syntax, lets you group elements without a wrapper node.

Wrap elements in `<Fragment>` to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag `<></>` is shorthand for `<Fragment></Fragment>` in most cases.

```javascript
<>
  <OneChild />
  <AnotherChild />
</>
```
 - Fragments are useful because grouping elements with a Fragment has no effect on layout or styles, unlike if you wrapped the elements in another container like a DOM element (div). If you inspect the element with the browser tools, you’ll see that all DOM nodes appear as siblings without wrappers around them

### Q6. What is a Virtual DOM (VDOM) ?

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called `reconciliation`.

Virtual DOM is more of a pattern than a specific technology. VDOM is actually associated with React Element as they are just object similar to ReactElement Object that represents the UI. When you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via a setState set-state function), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

> React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

`React fibre is the new reconciliation engine that enables incremental rendering of the Virtual DOM.`

### Q7. What is Reconciliation in React? 

The algorithm React uses to differentiate one tree with another to determine which parts need to be changed, is  called Reconciliation.
Update is a change in the data used to render a React app. Usually the result of `setState` (useState Hook), eventually results in a re-render.

The central idea of React's API is to think of updates as if they cause the entire app to re-render. Actually re-rendering the entire app on each change only works for the most trivial apps; in a real-world app, it's prohibitively costly in terms of performance. React has optimizations which create the appearance of whole app re-rendering while maintaining great performance. The bulk of these optimizations are part of a process called reconciliation.

> Reconciliation is the core algorithm used in Virtual DOM.

### Q8. What is React Fiber?
React Fiber is reimplementation of React's core algorithm, reconciliatioin. It is the culmination of over two years of research by the React team.

The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is `incremental rendering` (The ability to split rendering work into chunks and spread it out over multiple frames).

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed using keys. That's why Keys should be "stable, predictable, and UNIQUE".

### Q9. Why we need keys in React? When do we need keys in React?

Keys are specifically required to differentiate the DOM trees from one another. React's reconciliation algorithm uses keys to differentiate between trees.

### Q10. Can we use index as keys in React?

Technically we use index number as keys in react. BUT it will lead to eventual error when more DOM nodes are rendering in React.

Suppose, there is a list in the page that will update over time and more lists will be added in future. In these type of cases, indexing can be modified each time new element renders. That can affect the diff algorithm.

### Q11. What is props in React?

React components use props to communicate with each other. It's called *Passing a Props to a Component*. You can pass an JavaScript value through props including object, array and functions.

We can give props to a component in two steps:
-  `Passing props to Child Component`: Pass the props to Child Component is similar to giving attributes in a JSX markups. We can pass any value as props.

    ```javascript
    export default function Profile(){
        return (
            <Avatar person={{personName: "Nikola Tesla", job: "Inventor"}} species="Superhuman" />
        );
    }
    ```
    Now we can read the props inside `<Avatar/>` component. All the props we passed into the `<Avatar/>` component will create an object and we can access the object inside `<Avatar/>` component function.
- `Read the props inside the Child Component`: We can access the props object from function parameter. We can destructure them for better conciseness:
    ```javascript
    function Avatar({person, species}) {
        const {personName, job} = person;
        return (
            <>
                <h1>Name: {personName}</h1>
                <h2>Job: {job}</h2>
                <p>Species: {species}</p>
            </>
        );
    };
    ```


### Q. What is a Config Driven UI? 

A technique that allows to create user interfaces based on a configuration file, such as JSON or a Typescript file that defines the layout and content of the UI components.

So the UI is built and configured by a declarative configuration file, or a data structure, than being hardcoded. The config file, or data structure, contais all the information about the structure of the UI; such as the layout of the elements, properties and behaviour of the each element and any data sources or API that the UI interacts with.

- Using Config driven UI approach, the UI can be easily modified and customized without requiring changes to the underlying code base. This makes easier to maintain, extend or scale the UI, and causing rapid development also.

There are many frameworks support building config driven UI:
- `React`: React provides a flexible and powerful way to build UIs using a component-based architecture, which can be easily configured by using **states** and **props**

---