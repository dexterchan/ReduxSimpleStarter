import React from "react";

/*
//Simple functional component
const SearchBar = ()=> {
    return <input/>;
};*/

//JSX class
class SearchBar extends React.Component{
    render(){
        return <input onChange={ (event)=>    console.log(event)  }/>
    }
    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;