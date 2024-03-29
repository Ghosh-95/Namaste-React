# Day-08 Assignments

### Q1. How do you create Nested Routes in react-router-dom configuration?

We need to create a route with `createBrowserReact` method. It takes an array of objects as a parameter, each object contains elemetns and paths. However that object may contain more prperties such as errorElement (for rendering error page if occurs any), children (an array of router objects that contains differnet child routes).
```javascript
const router = createBrowserReact([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [],
    },
]);
```
We can create a nested routing for `/path` route using `children` array as below:
```javascript
const router = createBrowserReact([
    {
        // rest of codes... as above
        children: [
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/contact/:contactId',
                element: <Contact />,
            },
        ],
    },
]);
```

### 2. Read about createHashRouter, createMemoryRouter from React Router docs.

- `createHashRouter`: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the URL.

- `createMemoryRouter`: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools, but can also be used for running React Router in any non-browser environment.

>You can read about them [here](https://reactrouter.com/en/main).

### Q3. What is the order of life cycle method calls in Class Based Components?

While using a class-based component, we can see the lifecycle of that component class.
- Initially the `constructor()` function gets called.
- Then the `render()` method gets called and all the documents gets painted in the web page.
- Then `componentDidMount()` is called after rendering the DOM.
- Now whenever we update or make some changes in the component, updating phase begins. Component gets rendered with new values and the DOMs get updated. Then `componentDidUpdate()` gets called at the end of the rendering the updated DOM.
- Then when we leave (erase the current markup from DOM tree) the current page `componentWillUnmount()` gets called.

Lifecycle of React's class component looks like this:

![React lifcycle methods](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png)

### Q4. Why do we use `componentDidMount()` ?

`componentDidMount()` gets invoked, during the mounting phase, when the component is completely rendered into the DOM. We might want to execute some operation after the DOM is fully loaded into the page. For example we can make API calls inside this method (we can even make asynchronous operation).
```javascript
async componentDidMount(){
    const response = await fetch('random url');
    const data = await response.json();
};
```
### Q5. Why do we use `componentWillUnmount()` ? Show with example.

`componentWillUnmount()` is used to cleanup of the application when we switch routes. Since, it is quite popular to use SPA(Single Page Application), the current component's operations (if there is any) will always run in the background even after we switch route. This may cause performance issue and sometimes, overall user experience. That's why we need to terminate the current component's process before switching to another route.
- We can take a example of a timer function that runs after a component loads.
    ```javascript
    componentDidMount () {
        this.timer = setInterval(()=> {
            console.log("Interval is running.");

            // And other operations
        });
    };
    ```
- Now we need to terminate or clear the interval before leaving the current component, otherwise this interval might be cause performance overload. To do that we can use componentWillUnmount method:

    ```javascript
    componentWillUnmount(){
        clearInterval(this.timer);
    };
    ```
### Q6. Why do we use super(props) in constructor?

We call super() method inside constructor function of a child class, so the child class can inherit all the properties of the parent class it is extending to. As any class component in React extens to a parent class named React.Component, super() method is used to inherit the properties of parent class React.Component.
```javascript
class Child extends Parent{
    constructor(prop1, prop2, prop3){
        super(prop1, prop2); // inherits from parent class
        this.prop3 = prop3; // create new property in child class
    }
};

// Similarly in React

class UserClass extends React.Component(){
    constructor(){
        super()
    }
}
```
Now, we use super(prop) to access the props that are passed into the component. All the props inside UserClass is `undefined` until we use super(props)
```javascript
class UserClass extends React.Component(){
    constructor(props){
        super(props)
    }

    render(){
        // data that are coming from this.props
        const { name, job, city, state } = this.props.data;

        return(
            <>
                <h2>{name}</h2>
                <p>{job}</p>
                <p>{city}, {state}</p>
            </>
        )
    }
}
```

### Q7. Why can't we have the callback function of useEffect async?

useEffect hook expects its callback function to return nothing except a cleanup function (which will be called when the component will be unmounted). As we all know an async function always returns a promise, using a async function in useEffect will make it return a promise which will make unnecessarry load on the page and might delay the invokation of the cleanup function. That's why do not use async funtion in useEffect