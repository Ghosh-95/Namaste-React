import { createElement } from 'react'
import './App.css'

function App() {

  return createElement(
    'h2',
    { className: 'app-element' },
    'Hey Sushvoan welcome to react',
  );
};

export default App
