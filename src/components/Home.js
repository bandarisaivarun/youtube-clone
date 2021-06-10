import axios from 'axios';
import React,{useState} from 'react';
import { Media,Card, Container } from 'reactstrap';
import {useLocation} from 'react-router-dom';

function handleClick(e,tVideoClick,video){
    // e.preventdefault();
     tVideoClick(video);
 }

function TopTrendingVideo({TrendingVideos,trendingVideosList,tVideoClick}){
    //const [videos,setvideo]= useState(null);
    let location=useLocation();
    const TrendingVideosres=async()=>{
       const response=await axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part:'snippet,statistics',
                key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                chart: 'mostPopular',
                maxResults:15,
                regionCode: 'IN'

            }
        })
        console.log(response);
        let res=await response.data.items;
        TrendingVideos(res);
    }

    

    console.log(location.pathname);
    console.log(trendingVideosList);
    if(location.pathname=='/Home' && trendingVideosList===null){

        console.log('Home call method entered');
        TrendingVideosres();
    }
    console.log(trendingVideosList);
    let videos=trendingVideosList;
    if(videos!=null){
        return(
            <div className="trendy-videos d-flex flex-wrap pl-5" style={{border:"solid",overflow:"scroll",position:"fixed",height:"90vh"}}>
            {videos.map((video)=>{
                return(
                <Card className=" d-flex mr-3 mb-3 shadow" style={{width:"303px"}}>
                    <Media left >
                            <img src={video.snippet.thumbnails.medium.url} id={video.id.videoId} alt="video lists" width='300' height='160' onClick={(e)=>handleClick(e,tVideoClick,video)} />
                        </Media>
                        <Media body className="list-desc ml-3 mt-3 d-inline-block text-truncate" style={{maxWidth:"300px"}}>
                            {video.snippet.title}
                            <hr />
                            <Media heading id="list-desc" >{video.snippet.channelTitle}</Media>
                        </Media>
                    {/* <Media left>
                        <img id={video.id} src={video.snippet.thumbnails.medium.url} alt={video.snippet.localized.title} />
                    </Media>
                    <Media body right>
                        {video.snippet.localized.title}
                        <hr />
                        
                            {video.snippet.channelTitle}
                    </Media> */}
                    
                </Card>
                )
            })
            }
           </div>
        )
    }
    else{
        return(
            <div>data not been fetch</div>
        )
    }

}

const Home=({TrendingVideos,trendingVideosList,tVideoClick})=>{
    return(
        <TopTrendingVideo TrendingVideos={TrendingVideos} trendingVideosList={trendingVideosList} tVideoClick={tVideoClick} />
    )
}

export default Home;