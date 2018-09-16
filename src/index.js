import React from 'react';
import ReactDOM from 'react-dom';
//Create a new component. This component should produce some HTML
//const is ES6
const App = ()=>{
    return <div>Hi! pp</div>; //JSX component
}
//Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));
