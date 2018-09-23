import React from "react";

const VideoDetail = ({video}) => {
    //Need to handle null pass in video in this case
    //youtube api run async
    //framework will first call the render function before youtube api search finish
    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url=`https://www.youtube.com/embed/${videoId}`;
    //eqv
    //const url="https://www.youtube.com/embed/"+videoId;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;