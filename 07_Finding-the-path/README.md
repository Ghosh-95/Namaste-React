# Day07 - Assignments

You can find day-07 related code in [here](https://github.com/Ghosh-95/react-food-app)

### Q1. What are various ways to add images into our App? Explain with code examples.

There are multiple ways to add images to a project.
- We can use CSS background-image property and url() function to add image as background in a page.
    ```css
    body {
        background-image: url(https://image-link);
    }
    ```
- We can use `<img>` tag in HTML (or JSX) file to add image in webpage. Use 'src' attribute to add the image link.
    ```html
    <img src="https://www.random-image.com/54687" alt="Random image">
    ```
- We can save the image in project folder and import it in the file we want to use.
    ```javascript
    import logoImg from "../public/img/logo.png";

    export default function LogoImage(){
        return (<img src={logoImg} alt="website logo">)
    };

    /* In this example we are using logo image which is saved inside public folder.
    */
    ```
### Q2. What would happen if we do console.log(useState())?
useState() is basically a function which provides some functionalities, these type of function are called hooks.
As it is a function and it returns an array of two item: one variable and one seter function, if we log we will see an array of an array of 'undefined' and a 'function'
```javascript
console.log(useState()); // Output: [undefined, ƒ]
```

### Q3. How will `useEffect` behave if we don't add a dependency array?

useEffect is a React hook that synchronizes a component with an external system (piece of code that is not controlled by React).

```javascript
useEffect(function(){}, []);
```

useEffect takes a function and a dependency array as parameter. The function is a setup function with useEffect logic. Evertime the component is added to DOM, React will call the setup function.
And the dependency array is optional, it contains all the reactive values refrenced inside setup function. 
>After every re-render with changed dependencies, React will run setup function with new values.

- If the dependency array is specified, effect runs after the initial render and every time there is change in dependencies (any of them).
    ```javascript
    useEffect(() => {
        value += 1;
        console.log("Effect runs after inital render and every time reactive value changes.", value);
    }, [value]);
    ```
- Passing an empty dependency array will run the effect after the initial render, if the setup function truly doesn't use any reactvie value.
    ```javascript
    useEffect(() => {
        console.log("This effect runs after the inital render");
    }, []);
    ```
- If there is no depedency array, effect runs after every single render.
    ```javascript
    useEffect(() => {
        console.log("This effect runs with every re-render");
    });
    ```
### Q4. What is SPA?

`Single Page Application` or `SPA` is a type of web application that dynamically routes webpage without reloading/refreshing the entire page. All the necessarry files will load in inital render and rest will load whenever required.

### Q5. What is the difference between `Client Side Routing` and `Server Side Routing`?

- SSR: When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route or server-side-render. A whole new document is served to the user.

    - A server-side request causes the whole page to refresh.
    - A new request is sent to the server which responds with a new document, completely discarding the old page altogether.
- CSR: A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. 
    - It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.