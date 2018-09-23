import React from "react";

/*
//Simple functional component
const SearchBar = ()=> {
    return <input/>;
};*/

//JSX class
//Only class based object has state
//State is localized in the instance of a class
//When state changes, the class re-render itself

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term:'Type your query here...', onQuery:props.onQuery};
    }
    render(){
        

        return (
        <div className="search-bar">
        <input value={this.state.term} 
        onChange={ (event)=> this.onInputChange(event.target.value)}
        onClick={ (event)=>this.setState({term:""})}/>
        
        </div>        
        );
        //Value of the input : {this.state.term}
    }
    onInputChange(queryStr){
        this.setState({term:queryStr}) ;
        if(queryStr.length > 0){
            this.props.onQuery(queryStr);
        }
    }
}

export default SearchBar;