import React,{useState} from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


const YoutubeMainFrame=({videoLists,video,videoclick})=>{
       /*
       -----about embed---
       to get information from any web page (using oembed, opengraph, 
        twitter-cards, scrapping the html, etc). It's compatible with
         any web service (youtube, vimeo, flickr, instagram, etc)
          and has adapters to some sites like (archive.org, github, facebook, etc).
       */
      const [videodetail,setvideodetails]=useState('');
      console.log('main frame entered');
      console.log(videoclick);
      console.log(video);
        if(!video) return <div>Loding...</div>;
        
        const Videosrc=`https://www.youtube.com/embed/`;
        var Videosr='';

        if(video && videoclick===''){
             Videosr=Videosrc+`${video.id.videoId}`;
        }    
        else{
             Videosr=Videosrc+`${videoclick}`;
        }

      
        // if(!videoclick)
        // {
        //      setvideodetails(video[0]);
        //      console.log(videodetail);
        // }
        // else{
        //     setvideodetails(videoLists.filter((video)=>{return video.id.videoId===videoclick}));
        //     console.log(videodetail);
        // }
        console.log(videodetail);                  
        
            return(
                <div className="video-frame " style={{height:'auto'}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe title="none" src={Videosr} width="100%" ></iframe>
                    </ResponsiveEmbed>
                    <div>
                        <p>
                           {video.snippet.title} 
                        </p>
                        <hr/>
                        <span id='title'>{video.snippet.channelTitle}</span>
                    </div>
                </div>
            )
        
    
}

export default YoutubeMainFrame;