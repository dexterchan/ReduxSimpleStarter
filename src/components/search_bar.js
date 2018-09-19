import React from "react";

/*
//Simple functional component
const SearchBar = ()=> {
    return <input/>;
};*/

//JSX class
//Only class based object has state
class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term:''};
    }
    render(){
        return (
        <div>
        <input onChange={ (event)=> this.setState({term:event.target.value}) }/>
        Value of the input : {this.state.term}
        </div>        
        );
    }
    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;