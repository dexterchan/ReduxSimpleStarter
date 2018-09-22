import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";

//Create a new component. This component should produce some HTML
//const is ES6
const QUERY_STR="AIzaSyAVIVRTFQ6aduDqqzNKp1EPQDIJtOnWlek";



class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[]};

        YTSearch(
            {key:QUERY_STR, term:"surfboards"}, 
            (videos)=>{
                this.setState({videos});
                //ES6 quivalent to
                //this.setState({videos:videos});
            }
        );
    }

    render(){
        return (<div>
            <SearchBar/>
            <VideoList queryvideos={this.state.videos}/>
        </div>); //JSX component
    }
};

/*
//Functional component
const App = ()=>{
    return (<div>
        <SearchBar/>
    </div>); //JSX component
}*/
//Take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.querySelector('.customcontainer'));
