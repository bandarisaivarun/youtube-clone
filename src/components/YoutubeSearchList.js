import React from 'react';
import { Media } from 'reactstrap';

function handleClick(e,{channelDetails}){
    channelDetails(e.target.id);
    //console.log(e.target.id);
}

function Result({videos,channelDetails}){
    console.log('youtubelist result method..');
    console.log(videos);
    if(!videos) return(<div>Loading...</div>);
    return(
    videos.map((video)=>{
        const videoSrc=`${video.snippet.thumbnails.medium.url}`;
        return(
        <div>
            <Media className="d-flex mb-3" id={video.id.videoId} >
                
                <Media left >
                    <img src={videoSrc} id={video.id.videoId} alt="video lists" width='250' height='150' onClick={(e)=>handleClick(e,{channelDetails})} />
                </Media>
                <Media body className="ml-3">
                    {video.snippet.title}
                    <Media heading >{video.snippet.channelTitle}</Media>
                </Media>
            </Media>
        </div>
        )
    })
    );
}   



const YoutubeSearchList =({videoLists,channelDetails})=>{
     
       
   
        console.log('youtubelist class');
         return(
             
            <div className="video-lists " >
                <Result videos={videoLists} channelDetails={channelDetails}/>
            </div>
         )
     

}



export default YoutubeSearchList;