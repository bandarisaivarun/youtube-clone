import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Media,Card } from 'reactstrap';
import { useHistory } from 'react-router';
import {useLocation} from 'react-router-dom';
import LoadingSpin from "./LoadingSpin";
import './HomeComponent.css';


function TopTrendingVideo(){
    const [TrendingVideos,setTrendingVideos]= useState(null);
    const [isLoading, setisLoading] = useState(false);
    const history=useHistory();
    const location=useLocation();
    const TrendingVideosres=async()=>{
        setisLoading(true);
      axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part:'snippet,statistics,contentDetails',
                key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                chart: 'mostPopular',
                maxResults:15,
                regionCode: 'IN'

            }
        }).then((res)=>{
            console.log(res.data.items);
            setTrendingVideos(res.data.items);
             setisLoading(false);
        }).catch((err)=>{
            console.log(err.message);
        })
        
       

       
        
        
        
    }

    

    console.log(location.pathname);
    console.log(TrendingVideos);
    
    useEffect(() => {
        if(location.pathname=='/Home' && TrendingVideos===null){

            console.log('Home call method entered');
            TrendingVideosres();
        }
        
    }, []);

    const handleClick=(e)=>{
        
        console.log('home clicked id:',e.target.id);
        history.push(`/mainpage/${e.target.id}`);
   
    }
    if(isLoading){
        return(
            <div className="homepage" style={{background:"white"}}>
                <div className="l" >
                    <LoadingSpin />
                </div>
                
              
            </div>
        )
    }
    if(TrendingVideos!=null){
        console.log('display section entered');
        return(    
            <div className="homepage" >{
                TrendingVideos.map((video)=>{
                    return(
                        <div className="homepage-list" onClick={(e)=>handleClick(e)}>
                            <div className="HomePage-content  ">
                                {/* width='250' */}
                                <span>
                                    <img className="homepage-img" src={video.snippet.thumbnails.medium.url} id={video.id} alt="video lists"  width="100%"  />
                                </span>
                                <div className="homepage-desc text-truncate " id={video.id}>
                                    {video.snippet.title}
                                    <div class="homepage-title" id={video.id}>{video.snippet.channelTitle}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            sai varun......
            </div>
        )
    }
    else{
        return(<div>loading...</div>)
    }

}

const Home=()=>{
    return(
        <TopTrendingVideo  />
    )
}

export default Home;


  //     <div className="trendy-videos d-flex flex-wrap pl-5" style={{border:"solid",overflow:"scroll",height:"90vh"}}>
        //         {/* style={{border:"solid",overflow:"scroll",height:"90vh"}} */}
        //     {TrendingVideos.map((video)=>{
        //         return(
        //         <Card className=" d-flex mr-3 mb-3 shadow" style={{width:"303px"}}>
        //             <Media left >
        //                     <img src={video.snippet.thumbnails.medium.url} id={video.id.videoId} alt="video lists" width='300' height='160'  />
        //                 </Media>
        //                 <Media body className="list-desc ml-3 mt-3 d-inline-block text-truncate" style={{maxWidth:"300px"}}>
        //                     {video.snippet.title}
        //                     <hr />
        //                     <Media heading id="list-desc" >{video.snippet.channelTitle}</Media>
        //                 </Media>
                   
                    
        //         </Card>
        //         )
        //     })
        //     }
            
        //    </div>