import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//Create a new component. This component should produce some HTML
//const is ES6
const QUERY_STR="AIzaSyAVIVRTFQ6aduDqqzNKp1EPQDIJtOnWlek";
const App = ()=>{
    return (<div>
        <SearchBar/>
    </div>); //JSX component
}
//Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.querySelector('.customcontainer'));
