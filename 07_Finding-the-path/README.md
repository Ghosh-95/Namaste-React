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