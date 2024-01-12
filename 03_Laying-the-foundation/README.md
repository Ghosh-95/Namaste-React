# Day-03 Assignments

### Q1. What is JSX

JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. It may look a lot like HTML, but JSX is more stricter and it can display dynamic information.

We use JSX to generate elements and create components in React. Though `React.createElement` can generate markup in React but the code gets messy when it comes to generate lots of elements. But in JSX we can generate markup just like HTML.

~~~
const headingElement = <h1>This is an h1 element.</>

It is recommended to use JSX markups inside a parenthesis:
const headingElement = (<h1>This is an h1 element.</>)

~~~

>*JSX and React are two separate things. They're often use together, but you can use them independently.*

<ins>**There are certain rules of writing JSX:**<ins/>

1. To create multiple elements, wrap them under a single parent tag or you can use `Fragments(<></>)` to wrap them.

    ~~~
    const headerElements = (
        <>
            <h1>Header Element</h1>

            <nav>
                <ul>
                    <li>List Element</li>
                    <li>List Element</li>
                    <li>List Element</li>
                </ul>
            </nav>
        </>
    );
    ~~~

2. JSX is more strict than HTML. JSX requires a tag to be explicity closed; self-enclosing tags like `<img>` must become `<img/>`.

3. Most of the attributes and other things (not all of them) should be in camelCase; `stroke-width` will become `strokeWidth`. Since `class` is a preserved word in JavaScript, it should become `className`.


While a JSX getting rendered, the transpiler/compiler converts it to a React element first. Then it gets converted to normal HTML markup.

``````
const heading = (<h1>React Assignment</h1>);

=> React.createElemet(
    "h1", null, "React Assignment"
);
``````

### Q2. What is the superpower of JSX?

- JSX provides you privilege of writing markup inside JavaScript file. We can save lot of time by not using React.createElement().

- We can write JavaScript codes, mathmatical operatons and all the other type of things inside JSX using `curly-braces`.

    ~~~
    const price = 100 + 123;

    const paragraph = (
        <p>Hey, total price of this product is {price}</p>
    )
    ~~~

- JSX makes our code more readable and maintainable.


### Q3. What is the role of `type` attribute in script tag? What options can be used there?

`type` attribute specify the type of any HTML tag. It is same for `<script>` also, it identifies the content inside the `<script>` tag.

~~~
Here is an example of module type script tag:

<script type="module" src="main.js"></script>
~~~

In `<script>` tag `type` attribute can be following:

- `text/javascript`: It is the default standard value of a script tag.
- `text/ecmascript`: This value indicates that the script is following `EcmaScript` standards.
- `module`: Tells the browser that the script is a module and can be export/import other files or modules into current script.
- `text/babel`: This indicates that the script is babel type and needs babel to transpile it.
- `text/typescript`: As the name suggests the script is written in `TypeScript`.

### Q4. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

- `{TitleComponent}`: The value describes the 'TitleComponent' as a JavaScript expression or variable. With the help of `{}`, we can embed a JavaScript.

    ~~~
    const headingElement = (<h1>This is an h1 element.</>)

    root.render(
        {headingElement}
    )
    ~~~
- `{<TitleComponent/>}`: This value represents a functional component which is returning some JSX. A component is written inside `</>` or `{</>}` expression.

    ~~~
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

    ~~~
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