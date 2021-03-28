import React from 'react';
import { Media } from 'reactstrap';

function Result({videos}){
    console.log('youtubelist result method..');
    console.log(videos);
    if(!videos) return(<div>Loading...</div>);
    return(
    videos.map((video)=>{
        const videoSrc=`${video.snippet.thumbnails.medium.url}`;
        return(
        <div>
            <Media className="d-flex mb-3" id={video.id.videoId} >
                {/*<iframe title="youtube" src={videoSrc} scrolling='no' width='320' height='180' ></iframe>*/}
                <Media left >
                    <iframe title="youtube" src={videoSrc} scrolling='no' width='320' height='180' ></iframe>
                </Media>
                <Media body className="ml-3">
                    {video.snippet.title}
                    <Media heading>{video.snippet.channelTitle}</Media>
                </Media>
            </Media>
        </div>
        )
    })
    );
}   



const YoutubeSearchList =({videoLists})=>{
     
       
   
        console.log('youtubelist class');
         return(
             
            <div className="video-lists " >
                <Result videos={videoLists}/>
            </div>
         )
     

}



export default YoutubeSearchList;