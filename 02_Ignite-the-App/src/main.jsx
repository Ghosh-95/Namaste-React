import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const newEl = React.createElement(
  'h1',
  { id: "hero-heading", key: "heading-1" },
  'Hello World',
);

const parent = React.createElement(
  'div',
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "children", key: "div-sibling-1" },
    [newEl,
      React.createElement('h2', { id: "sibling", key: "heading-2" }, "Learning from Namaste React",),
      React.createElement("p", { id: "description", key: "about-me" }, "I live in West Bengal, I love to read while I am not coding.")]
  ),
  React.createElement("div", { id: "children-2", key: "div-sibling-2" }, [
    newEl,
    React.createElement('h2', { id: "sibling", key: "heading-2" }, "Learning React from Namaste React",),
    React.createElement("p", { id: "description", key: "about-me" }, "I live in West Bengal, I love to read and listen audiostories while I am not coding.")]
  )]
);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  parent
);