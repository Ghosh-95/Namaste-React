# Assignments: Day-01

### Q1. What is Emmet?
<p> Emmet is a tool that helps developers to write and expnad shorthand HTML and other languages. It's desigined to write code faster by providing multiple shortcuts and abbreviation that can be expanded into piece of codes.</p>

<p>We can use emmet by adding to the IDE we use everyday. Emmet provides a wide range of code-snippets that help developers in the field of web development</p>

### Q2. What are the difference between a Library and a Framework?

<p>Both libraries and frameworks are reusable piece of code that is written by others. And they are widely used to solve orginary problems easily.</p>

- **Frameworks** supply a blueprint of a finished product. As a result, a framework gives the fundamental structure while indicating the customization developer might require. A framework defines the workflow of a software application. Apart from that, a framwork can reduces code length, enable code reuse, ease debugging and improve security. 
    >E.g. DJango, Express, Angular
- A **Library**, on the other hand, is a group or pre-written codes to ease development. A collection of pre-defined methods and classes that developer can use to accelerate their development process. As a result, a developer do not need to write code to achieve certain features. Most programming languages has their own standard libraries, but developers can make their own library. As a software engineer, one can leverage libraries during a typical development process. Libraries proved reusable code-components, predefined functions and important constants that can be used to simplify and fastforward development process.
    >E.g React, Redux, jQuery

### Q3. What is CDN? Why do we use it?
 <p>A Content Delivery Network is a geographically distributed group of server that enables caching the content close to clients. A CDN allows their quick transfer of assets needed for loading a webpage content, including HTML pages, JavaScript files, stylesheets, images and videos.</p>
 
 * Today majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix and Amazon.
 * Improves website laod times so that visitor can experience smooth surfing and thus they spend more time on the site.
 * Reduces bandwidth costs by caching and other organizatioins, CDNs are able to reduce the amount of data an origin server must provide. Thus reducing the cost of website owners.
 * A CDN might improve website security by doing impletetions to security certificates, preventing `DDoS`(Distributed denial-of-service) attacks through mitigation and other optimizations.

 ### Q4. Why is React known as React?

 React is a JavaScript library developed by Facebook. Developers use it to build interactive user interfaces for websites and web apps. With react, developers can create, combine and reuse components to makes beautiful, interactive webpages.

React is 'React' because: 
>- It 'reacts' quickly to changes without reloading the whole webpage.
>- It uses `virtual DOM` to efficiently update parts of an webpage.
>- It's built around components that 'reacts' and update.

### Q5. What is crossorigin in script tag?

`crossorigin` HTML attribute sets the mode of the request to and HTTPS `CORS` request.

**CORS**: CORS is used to manage cross-origin requests. It stands for `Cross Origin Resource Sharing`, a mechanism that allows a page to request resources from another domains outside of its own. I defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server among other things.

A cross-origin request request is a request for a resource e.g. stylesheets, iFrames, images, fonts or scripts from another domain.

>*Opposite of cross-origin request is same-origin request, that determines interactions of resources remains within the same domain.*

### Q6. What are the differences between React and ReactDOM?

1. React:
   - A JavaScript library for building user interfaces or UI components.
   - It is used to create reusable UI components and manage the state of the components.
   - React is responsible for handling the rendering and updating of components.
   - It provides a virtual DOM (Document Object Model) that makes the rendering process more efficient.
   - React does **NOT** have any built-in features for rendering components to the DOM.
2. ReactDOM:
   - A package that integrates React with the DOM.
   - It is used to render React components to the DOM.
   - ReactDOM is responsible for updating the actual DOM based on the changes in the virtual DOM.
   - It provides methods for rendering components to specific elements in the DOM.
   - ReactDOM also provides methods for unmounting components from the DOM.

### Q7. What is difference between react.development.js and react.production.js files via CDN?

The React library provides two versions of its JavaScript files: react.development.js and react.production.js. These files serve different purposes and are typically used in different stages of the development and deployment process. When serving these files via a Content Delivery Network (CDN), there are a few key differences between them:

- **File Size:** The react.development.js file is typically larger in size compared to react.production.js. The development version contains additional codes, comments, and debugging information that helps in development and troubleshooting. On the other hand, the production version is optimized for performance and has undergone various optimizations, including minification and removal of unnecessary code, resulting in a smaller file size.

- **Performance:** The production version (react.production.js) is optimized for performance and is typically used in production environments. It includes various optimizations, such as dead code elimination, to make the React library run more efficiently. These optimizations help reduce the overall bundle size, improve runtime performance, and enhance the user experience.

- **Error Messages:** The development version (react.development.js) provides more detailed error messages and warnings compared to the production version. This helps developers identify and diagnose issues during the development process. The development version includes additional checks and warnings to provide useful information when something goes wrong. However, these additional checks and messages are not included in the production version for performance reasons.

>*When using a CDN, it's common to load the development version (react.development.js) during development and debugging stages. This allows developers to take advantage of the detailed error messages and warnings provided by the development version for easier debugging. However, in production environments, it is recommended to use the production version (react.production.js) for better performance and reduced file size.*

### Q8. What is async and defer?

Both are HTML attributes used in script tag. When a browser parses HTML elements it loads all the scripts (JS files) after parsing the HTML. In case of large scale project this process takes much time and cause delay in loading the website. To prevent that delay we use `async` and `defer`.

**async**: Async attribute in an HTML tag is used to load the scrip file asynchronously. That means the script will load independently with other files and would not block the page from loading. When a project has multiple scripts file, using async will speed up page load time, because browser can download them in parallel.
~~~
<script async src="script.js"></script>
~~~

**defer**: By using defer, we can ensure laoding the script only after the whole HTML is parsed. This can be helpful when we have multiple scripts that are dependent on each other.
~~~
<script defer src="script.js"></script>
~~~