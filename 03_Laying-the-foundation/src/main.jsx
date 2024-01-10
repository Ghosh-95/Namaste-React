import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// React Elements
const jsxHeading = (<h1 className='title-name' tabIndex={1} aria-label='first-heading'>Sushovan Ghosh</h1>)

const root = ReactDOM.createRoot(document.getElementById('root'));

// React Components
function HeadComponent() {
  return (
    <h1>I am learning Functional Components</h1>
  )
}

function HeadingComponent() {
  return (
    <>
      <HeadComponent />
      <h2>This is a Functional Component</h2>
    </>
  );
};

const ParaComponent = () => (<p>This is a paragraph component.</p>)

function Elements() {
  return (
    <>
      <HeadingComponent />
      <ParaComponent />
    </>

  )
}
root.render(
  <Elements />
);