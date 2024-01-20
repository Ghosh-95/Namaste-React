# Day04 - Assignments

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

Virtual DOM is more of a pattern than a specific technology. VDOM is actually associated with React Element as they are just object similar to ReactElement Object that represents the UI. It creates an object based on the DOM nodes that are added to the UI. Then when React re-renders it with new DOM nodes, React differentiate that old object and the new object (new DOM nodes) and paint the changes on the browser. 

> React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

`React fibre is the new reconciliation engine that enables incremental rendering of the Virtual DOM.`

Read more about [React Fibre](https://github.com/acdlite/react-fiber-architecture)

### Q7. What is Reconciliation in React? 

The algorithm React uses to differentiate one tree with another to determine which parts need to be changed.
A change in the data used to render a React app. Usually the result of `setState`, eventually results in a re-render.

### Q. What is Config Driven UI? 

A technique that allows to create user interfaces based on a configuration file, such as JSON or a Typescript file that defines the layout and content of the UI components.

So the UI is built and configured by a declarative configuration file, or a data structure, than being hardcoded. The config file, or data structure, contais all the information about the structure of the UI; such as the layout of the elements, properties and behaviour of the each element and any data sources or API that the UI interacts with.

- Using Config driven UI approach, the UI can be easily modified and customized without requiring changes to the underlying code base. This makes easier to maintain, extend or scale the UI, and causing rapid development also.

There are many frameworks support building config driven UI:
- `React`: React provides a flexible and powerful way to build UIs using a component-based architecture, which can be easily configured by using **states** and **props**