
import React,{useState,useRef} from 'react';
import { Card,CardBody, Media } from 'reactstrap';
import LoadingSpin from './LoadingSpin';
import './YoutubeSearchList.css';
import {useHistory, withRouter} from 'react-router';



function Result({videos,isLoading,videoClick}){
    const history=useHistory();
    console.log('youtubelist result method..');
    //const [isLoading, setisLoading] = useState(false);
    //const [videos, setvideos] = useState(null);
    
   const handleClick=(e,{videoClick})=>{
       //e.preventDefault();
      // console.log(list);
      console.log(e.target.id);
      videoClick(e.target.id);
      // history.push(`/mainpage/${e.target.id}`);


   }
    if(isLoading){
        return(
       
                
                <div className="loading">
                        <LoadingSpin/>
                </div>
            
                )
    }
        
    else if(videos){

        return(
            videos.map((video)=>{
                const videoSrc=`${video.snippet.thumbnails.medium.url}`;
                return(
                    <div className="list mb-3" key={video.snippet.title} id={video.snippet.title} onClick={(e)=>handleClick(e,{videoClick})}>
                        <div className="list-content">
                            {/* width='250' */}
                            <span>
                                <img className="list-img" src={videoSrc} id={video.id.videoId} key={video.id.videoId} alt="video lists"    />
                            </span>
                            <div className="list-desc text-truncate">
                                {video.snippet.title}
                                <hr />
                                <Media heading className="list-title" >{video.snippet.channelTitle}</Media>
                            </div>
                        </div>
                    </div>
                )
            })
            )
    }
    else{
      return(<div></div>)
    }
    
}   



const YoutubeSearchList =({videos,isLoading,videoClick})=>{
     
       
   
        console.log('youtubelist class');
         return(
             
            <div className="video-lists " >
                <Result videos={videos} isLoading={isLoading} videoClick={videoClick} />
            </div>
         )
     

}



export default withRouter(YoutubeSearchList);


  // <div>
                //     <div className=" mb-3">
                //     <Media className="list" id={video.id.videoId} >
                //         {/* width='250' height='150' */}
                //         <Media left >
                //             <img src={videoSrc} id={video.id.videoId} alt="video lists"   />
                //         </Media>
                //         <Media body className="list-desc ml-3 mt-3">
                //             {video.snippet.title}
                //             <hr />
                //             <Media heading id="list-desc" >{video.snippet.channelTitle}</Media>
                //         </Media>
                //     </Media>
                //     </div>
                // </div>