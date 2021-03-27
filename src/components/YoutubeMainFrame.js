import React from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


const YoutubeMainFrame=({video})=>{
       /*
       -----about embed---
       to get information from any web page (using oembed, opengraph, 
        twitter-cards, scrapping the html, etc). It's compatible with
         any web service (youtube, vimeo, flickr, instagram, etc)
          and has adapters to some sites like (archive.org, github, facebook, etc).
       */
       if(!video) return <div>Loding...</div>;
        const Videosrc=`https://www.youtube.com/embed/${video.id.videoId}`;
        
            return(
                <div class="video-frame " style={{height:'auto'}}>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe title="none" src={Videosrc} width="100%" ></iframe>
                    </ResponsiveEmbed>
                </div>
            )
        
    
}

export default YoutubeMainFrame;