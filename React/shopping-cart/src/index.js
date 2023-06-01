import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';

// *** 
// Virtual DOM (Document Object Model) is a lightweight, in-memory
// representation of the actual DOM
// DOM is a tree-like structure 

// When the state of a web application changes, the virtual DOM updates its copy
// of the tree to reflect the new state and then uses a diffing algorithm to
// determine the minimal set of changes that need to be made to the actual DOM, 
// this process is known as "reconciliation"

// In doing so, updates only the specific parts of the real DOM that have
// changed, rather than re-rendering the entire page. This approach
// significantly improves the performance and responsiveness of web
// applications.
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// *** About React updates
// {
// import { createRoot } from 'react-dom/client';
//
// const element = <h1>Hello World</h1>;
// // React Version under 18
// // ReactDOM.render(element, document.getElementById('root'));
// // ReactDOM.render() 
// // First argument: the element we want to render
// // Second argument: where in the real DOM you want to render it 

// // React Version 18
// // In newer version, 'ReactDOM.render()' is replaced by 'createRoot'
// const rootNode = document.getElementById('root');
// const root = createRoot(rootNode);
// // createRoot()
// // Creates a React root for displaying content inside a browser DOM element
// // First argument: a DOM element
// root.render(element);
// // .render() 
// // Displays a piece of JSX (“React node”) into the React root’s browser DOM node.
// // First argument: a react node

// console.log(element);
// }
