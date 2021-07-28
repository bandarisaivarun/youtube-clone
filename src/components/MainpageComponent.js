import  YoutubeMainFrame  from "./YoutubeMainFrame";
import YoutubeSearchList  from "./YoutubeSearchList";
import './MainpageComponent.css';
import { statisticsDetails, useSearchQuery, useSubscriptions } from '../Hooks/CustomHooks';
import { useParams } from 'react-router';
import { withRouter } from "react-router";

//api

export const Mainpage=()=>{
      const paramsData=useParams();
      console.log('params data:',paramsData);
      const [videos,setvideos] = useSearchQuery(paramsData.name);
      
      console.log('mainpage',videos);
  
      // useEffect(() => {
      //       Subscriptions();
      // }, [])

      const videoClick=async (id)=>{
            var video=videos.Data.filter((video)=>id==video.id.videoId?video:'');
            console.log('filter',video);
            var statistics=await statisticsDetails(video[0].id.videoId);
            setvideos({...videos,mainFrameVideo:video[0],videoAndStatistics:statistics});
            console.log(videos);
      }
    return(
        <div className="mainpage" >
           
            <div className="mainpage-content">
                  <div className="main-frame"  >
                        <YoutubeMainFrame   isLoading={videos.isLoading} videoAndStatistics={videos.videoAndStatistics} comments={videos.comments} ></YoutubeMainFrame>
                  </div>
                  <div className="search-list"style={{border:"solid"}} >
                        <YoutubeSearchList  videos={videos.Data} isLoading={videos.isLoading} videoClick={videoClick} />
                  </div>
            </div>
                        
        </div>

    )
}

export default withRouter(Mainpage);