# Day 09 Assignments

### Q1. When and why do we need lazy()?

lazy() is a react feature that helps us to load a component when it is required. Generally, when a website loads in the browser, it comes with a huge files of assets and scripts and all of then loads all at once. This causes the site to run slow, which can cause performance issue and not good for user experience. To prevent this kind of issue, developers often split the codes in chunks and load them asynchronously. This process has many names such as Code Splitting, Lazy Loading, Dynamic Bundling, On-demand Loading, Chunking, Dynamic Importing etc.

React provides lazy() function to split the large code bases into chunks and load them asynchronously. We can use it while loading a different component than the current one. So all the component won't load at the time of initial rendering of the website, when a certain component is needed to render only then the component will load.

```javascript
import {lazy} from "./react";

const Component = lazy(() => import("./Component"));

// Now we can render the component wherever we want to
<Component />
```

### Q2. What is suspense?
### Q5. When do we and why do we need suspense?

As lazy() loads the data asynchronously, React sometimes throw an error while loading the desired component (which is lazy loading). To prevent that kind of error we often use an inbuilt component `<Suspense />`. It lets you display a fallback until all of its child have finished loading. So, React can render the fallback component until the original component finished loading.

```javascript
<Suspense fallback={<Loading />}>
    <OriginalComponent />
</Suspense>

// React will disply loading fallback until the OriginalComponent finished loading.
```
### Q3. Why we got this error: "A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition" ? How does suspense fix this error?

### Q4. Advantages and Disadvantages of using this code splitting pattern?

Developpers follow defferent methods to bring down app size. There is React Router to split big code bases into chunks, this can be great. But there are other approaches we use to reduce app size such lazy loading or code splitting. This approach has some significant advantages as well as some drawbacks to consider:

- `Advantages`: There are many benefits that splitting provides, which is primarily to bring down our App’s bundle size. We can lazy load most elements (like images) which is great, but for most apps the greatest bulk is in the components. So we’d ideally like to lazy load some of these as well.

- `Disadvantages`: Code splitting does increase the number of requests that the browser makes to fetch content. In a slow connection, if not managed properly, the user might sees nothing but some loading screen everywhere.