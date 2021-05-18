import React from 'react';
import { Card,CardBody, Media } from 'reactstrap';
import LoadingSpin from './LoadingSpin';

function handleClick(e,{channelDetails}){
    channelDetails(e.target.id);
    //console.log(e.target.id);
}

function Result({isLoading,videos,channelDetails}){
    console.log('youtubelist result method..');
    console.log(videos);
    var a=[5,4,6,8,9];
    if(isLoading){
        return(
        a.map((i)=>{
            console.log(i);
            return(
                
                <div id={i}>
                        <LoadingSpin/>
                </div>
            
                )
            }
        )
        )
    
    }
    else if(videos){
        return(
            videos.map((video)=>{
                const videoSrc=`${video.snippet.thumbnails.medium.url}`;
                return(
                <div>
                    <Card className=" mb-3 shadow-sm">
                    <Media className="list d-flexs" id={video.id.videoId} >
                        
                        <Media left >
                            <img src={videoSrc} id={video.id.videoId} alt="video lists" width='250' height='150' onClick={(e)=>handleClick(e,{channelDetails})} />
                        </Media>
                        <Media body className="list-desc ml-3 mt-3">
                            {video.snippet.title}
                            <hr />
                            <Media heading id="list-desc" >{video.snippet.channelTitle}</Media>
                        </Media>
                    </Media>
                    </Card>
                </div>
                )
            })
            )
    }
    else{
        return(<div></div>);
    }
    
}   



const YoutubeSearchList =({isLoading,videoLists,channelDetails})=>{
     
       
   
        console.log('youtubelist class');
         return(
             
            <div className="video-lists " >
                <Result videos={videoLists} channelDetails={channelDetails} isLoading={isLoading}/>
            </div>
         )
     

}



export default YoutubeSearchList;