import React,{useState} from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import LoadingSpin from './LoadingSpin';
import {Card,CardBody} from 'reactstrap';




const YoutubeMainFrame=({isLoading,video,videoclick,statisticsDetails})=>{
       /*
       -----about embed---
       to get information from any web page (using oembed, opengraph, 
        twitter-cards, scrapping the html, etc). It's compatible with
         any web service (youtube, vimeo, flickr, instagram, etc)
          and has adapters to some sites like (archive.org, github, facebook, etc).
       */
     
      console.log('main frame entered');
      console.log(videoclick);
      console.log(video);
      console.log(statisticsDetails);
      const Videosrc=`https://www.youtube.com/embed/`;
        var Videosr='';
       if(isLoading){
            return(
                
                    <Card  style={{height:"auto"}}>
                        <ResponsiveEmbed aspectRatio="16by9" style={{background:"white"}}>
                                <div className="loadingframe" style={{background:"white"}}>
                                    <LoadingSpin/>
                                </div>
                        </ResponsiveEmbed>
                        
                       
                        
                    </Card>
            
                );

       }
        
        else if(video && statisticsDetails){
             Videosr=Videosrc+`${video.id.videoId}`;

            
                       
        
            return(
                <Card className="video-frame shadow" style={{height:'auto'}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe title="none" src={Videosr} width="100%" ></iframe>
                    </ResponsiveEmbed>
                    <div style={{background:"rgb(255,255,255)"}} >
                        <p className="desc">
                           {video.snippet.title} 
                        </p>
                        <div className="video-statistics d-flex">
                            <div className="views d-flex mr-auto ">
                                <span className="view-count">{statisticsDetails.statistics.viewCount}views</span>
                            </div>
                            <div className="like-dislike d-flex" style={{background:"rgb(255,255,255)"}}>
                                <span className="like-count mr-3" ><i class="fa fa-thumbs-o-up pr-1" aria-hidden="true"></i>{statisticsDetails.statistics.likeCount}</span>
                                <span className="dislike-count mr-3"><i class="fa fa-thumbs-o-down pr-1" aria-hidden="true"></i>{statisticsDetails.statistics.dislikeCount}</span>
                            </div>
                        </div>
                        <hr/>
                        <span className="title" >{video.snippet.channelTitle}</span>
                        
                    </div>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            );
        }
        
    
}

export default YoutubeMainFrame;