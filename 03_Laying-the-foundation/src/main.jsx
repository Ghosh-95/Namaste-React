import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HeaderComponent from './Header.jsx'

/*
// React Elements
const jsxHeading = (<h1 className='title-name' tabIndex={1} aria-label='first-heading'>Sushovan Ghosh JSX </h1>)


// React Components

// (We can use either of the functions)
const HeadComponent = function () {
  return (
    <h1>I am learning Functional Components</h1>
    )
  }
  
  // We can write any JavaScript expression inside JSX with the
  // help of curly braces
  const spanElem = React.createElement('span', null, "This is a span tag");

  function HeadingComponent() {
    // Using a functional component insider another is called
    // component composition.
    return (
      <>
      <HeadComponent />
      <h2 style={{
        background: "green",
        padding: "10px 5px"
      }}>This is a Functional Component</h2>
    </>
  );
};

const ParaComponent = () => (<p>This is a paragraph component.</p>)

function Elements() {
  return (
    <>
      {jsxHeading}
      <HeadingComponent />
      <ParaComponent />
      {spanElem}
    </>

)
}
*/

// Assignments //////////
const root = ReactDOM.createRoot(document.getElementById('root'));

const HeaderElem = React.createElement(
  "div",
  { className: "title-container" },
  [
    React.createElement("h1", { className: "title", key: "title-1" }, "h1 element with React.createElement()"),
    React.createElement("h2", { className: "title", key: "title-2" }, "h2 element with React.createElement()"),
    React.createElement("h3", { className: "title", key: "title-3" }, "h3 element with React.createElement()"),
  ]
);

const headerJSX = (
  <div className='title-container-jsx'>
    <h1 className="title" key={"title - 4"}>h1 element with JSX</h1>
    <h2 className="title" key={"title - 5"}>h2 element with JSX</h2>
    <h3 className="title" key={"title - 6"}>h3 element with JSX</h3>
  </div>
);

const TitleComponent = () => (
  // Component Composition
  <>
    {headerJSX}
    {HeaderElem}
    <div className='title-container-componenet'>
      <h1 className="title" key={"title-7"}>h1 element with Component</h1>
      <h2 className="title" key={"title-8"}>h2 element with Component</h2>
      <h3 className="title" key={"title-9"}>h3 element with Component</h3>
    </div>
  </>
)

root.render(
  <>
    <HeaderComponent />
    <TitleComponent />
  </>
);