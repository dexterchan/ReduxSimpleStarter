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
        this.state={term:'Start'};
    }
    render(){
        return (
        <div>
        <input value={this.state.term} onChange={ (event)=> this.setState({term:event.target.value}) }/>
        
        </div>        
        );
        //Value of the input : {this.state.term}
    }
    onInputChange(event){
        console.log(event.target.value);
    }
}

export default SearchBar;