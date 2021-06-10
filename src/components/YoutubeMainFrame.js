import React,{useState} from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import LoadingSpin from './LoadingSpin';
import {Card,CardBody, Media} from 'reactstrap';
import axios from 'axios';

const nextComments=async(token,id,{commentMethod})=>{
    console.log(token);

    const response= await axios.get('https://www.googleapis.com/youtube/v3/commentThreads',{
            params:{
                    part:'snippet,replies',
                    pageToken:token,
                    key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                    videoId:id
                }});
    console.log(response);
    const res=await response.data;
    console.log(res);
    commentMethod(res,token);
    
                
    
}

const CommentBox=({comments,commentMethod,prevToken})=>{
    console.log('comment box entered');
    console.log(comments);

    // const [prevToken,setprevToken]=useState(null);
    
    if(comments){
        return(
            /*
            in comments list there is an other comments array consist of 20 comments
            -----------------------
            {comments:Array(20)
                 >comments:(20)[
                        >0:{}
                        >1:{}
                    ] }
            */ 
        <div style={{borderTop:"0.01em solid rgb(252,24,244)"}}>
            <div className="p-3" style={{borderBottom:"0.01em solid rgb(252,24,244)",width:"100%"}}>Comments</div>
            {comments.items.map((comment)=>{
                    return(
                        <div >
                            <Media>
                                <Media left className="m-3">
                                    <img style={{borderRadius:"100%"}} src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt={comment.snippet.topLevelComment.snippet.authorDisplayName[0]} />
                                </Media>
                                <Media right className="mt-3 mb-3 pl-2">
                                    <span style={{fontWeight:"600"}}>
                                        {comment.snippet.topLevelComment.snippet.authorDisplayName}
                                    </span> <br/>
                                    <span style={{fontWeight:"300"}}>
                                        {comment.snippet.topLevelComment.snippet.textOriginal}
                                    </span><br />
                                    <span>
                                        <i class="fa fa-thumbs-o-up pt-2 pr-2" aria-hidden="true"></i>{comment.snippet.topLevelComment.snippet.likeCount}
                                    </span>
                                </Media>
                            </Media>
                        </div>
                    )
                })
            }
            <div style={{display:"flex",justifyContent:"space-between"}}>
                
                {prevToken?<span className="m-2 pl-2" onClick={()=>{nextComments(prevToken,comments.items[0].snippet.videoId,{commentMethod})}}>previous</span>:''}
                {/* {setprevToken(comments.nextPageToken)} */}
                {comments.nextPageToken?<span className="m-2 pr-2" onClick={()=>{nextComments(comments.nextPageToken,comments.items[0].snippet.videoId,{commentMethod})}}>next</span>:''}

            </div>
        </div>
        )
        
      }
      
}


const YoutubeMainFrame=({isLoading,video,videoclick,statisticsDetails,comments,commentMethod,prevToken})=>{
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
             let id="";
             if(video.id.videoId){
                 id=video.id.videoId;
             }
             else{
                 id=video.id;
             }
             Videosr=Videosrc+`${id}`;

            
                       
        
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
                        
                        <CommentBox comments={comments} commentMethod={commentMethod} prevToken={prevToken} />
                    
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