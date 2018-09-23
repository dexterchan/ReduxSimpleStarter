import _ from "lodash";
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
//Create a new component. This component should produce some HTML
//const is ES6
const QUERY_STR="AIzaSyAVIVRTFQ6aduDqqzNKp1EPQDIJtOnWlek";

//Only class component can interact with "STATE"

class App extends Component{
    constructor(props){
        super(props);
        this.state={videos:[],
        selectedVideo:null
        };

        this.videoSearch("China");
    }

    videoSearch(queryStr){
        YTSearch(
            {key:QUERY_STR, term:queryStr }, 
            (videos)=>{
                this.setState({
                    videos,
                    selectedVideo:videos[0]
                });
                //ES6 quivalent to
                //this.setState({videos:videos});
            }
        );
    }



    render(){
        //throttling with debounce here
        //the callback function of videosearch query can only be called once every 300ms
        const videoSearch = _.debounce( (queryStr) => this.videoSearch(queryStr), 300 );

        return (<div>
            <SearchBar onQuery={ videoSearch } />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={//callback for selectedVideo event
                    (selectedVideo=>{this.setState({selectedVideo})})
                }
                videolist={this.state.videos}/>
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
