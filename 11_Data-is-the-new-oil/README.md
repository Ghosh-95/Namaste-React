# Day 11 - Theory Assignments

### Q1. What is Lifting the State Up?

Sometimes, you want the state of two components to always change together. To do it efficiently, remove state from both of them, move it to their closest common parent, and then pass it down to childrens via props. This is known as **lifting state up**.
> An Accordion would be an example of lifting state up.
\
\
![Lifting the State](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_lifting_state.dark.png&w=640&q=75)

### Q2. What is prop drilling?

But passing props down to children from parents can be troublesome and repeatative. if you have to pass them through many components in the middle, or if many component need the same information, State Lifting becomes inconvenient. The nearest common ancestor could have far removed from the components that need data, and lifting the state that **high** can led to a situation called `Props Drilling`.
\
\
![Props Drilling](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpassing_data_prop_drilling.dark.png&w=640&q=75)

### Q3. If you don’t pass a value to the provider does it take the default value?
The answer is Yes. If we use a context provider and we pass a value to it, new value will be rendered in the component.
```js
import { createContext, useContext } from "react";

// creating a context
const myContext = createContext( "Default Value" );

function Child() {

  // consuming the context with useContext hook
  const context = useContext(myContext);
  return <h2>Child1: {context}</h2>;
}

function Child2() {
    // consuming the context with useContext hook
  const context = useContext(myContext);
  return <h2>Child2: {context}</h2>;
}

function App() {

  return (
    <>
      <myContext.Provider value={ "Initial Value" }>
        <Child /> {/* Child inside Provider will get "Initial Value" */}
      </myContext.Provider>
        <Child2 /> {/* Child outside Provider will get "Default Value" */}
    </>
  );
}
```
### Q4. What is Context Provider and Context Consumer?

The context provider is used to create and manage context which holds the data to be shared between components. While consumer is used to access the context data within a component.