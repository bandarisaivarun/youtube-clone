import { Filter } from "@material-ui/icons";
import axios from "axios";
import { useState,useEffect } from "react"

export const statisticsDetails=async(videoid)=>{
    console.log('statistics entered');
   console.log(videoid);
    if(videoid !==null){
      
       const response=await axios.get('https://www.googleapis.com/youtube/v3/videos',{
         params:{
            id:`${videoid}`,
            key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
            part:'snippet,statistics'
           
           
         }
       });
       console.log('statistic middle');
       let res=await response.data.items[0];
      console.log(res);
      console.log('statistics end..');
      return res;
    }
}

export const commentThreadMethhod=async(videoid)=>{
    console.log('comment method entered');
    if(videoid!==null){
        const response=await axios.get('https://www.googleapis.com/youtube/v3/commentThreads',{
         params:{
           
            key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
            part:'snippet,replies',
            videoId:`${videoid}`,
           
           
         }
       });
       console.log('comment middle');
       let res=await response.data;
      console.log(res);
      console.log('comment end..');
      return res;
    }

}

export const  useSearchQuery=(searchItem)=>{
    const [responseVideos,setresponseVideos]=useState({isLoading:false});
    console.log('useSearchQuery entered');
    if(searchItem[0]=='-'){
        searchItem=searchItem.substr(1);
    }
    
    useEffect(async() => {
        setresponseVideos({...responseVideos,isLoading:true});
        const result=await axios.get(
         'https://www.googleapis.com/youtube/v3/search',{
        // 'https://www.googleapis.com/youtube/v3/playlistItems',
                        params:{    
                        part:'snippet',
                        maxResults:5,
                        key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                        q:searchItem,
                    }
                }    
                
            );
        console.log('result :',result);
        let Data= await result.data.items;
        console.log('data items:',Data);
        var video=Data.filter((item)=>item.id.videoId?item.id.videoId:'');
        console.log(video);
        var statistics=await statisticsDetails(video[0].id.videoId);
        var commentresult=await commentThreadMethhod(video[0].id.videoId);
 
        setresponseVideos({...responseVideos,isLoading:false,Data,videoAndStatistics:statistics,comments:commentresult});
    }, [searchItem]);

    return [responseVideos,setresponseVideos]
}

 


//    const ex=await axios.get('https://www.googleapis.com/youtube/v3/subscriptions',
//             {
//                 params:{
//                     part:'contentDetails',
//                     key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
//                     mine:true
//                 }
//             })
//         console.log(ex);

  //     var request =await window.gapi.client.request({
        //         'method': 'GET',
        //         'path': 'https://www.googleapis.com/youtube/v3/channels',
        //         'params': {'part': 'contentDetails,snippet',
        //                      'mine': 'true',
        //                     'apiKey':'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0'}
        //       });
        //  request.execute((res)=>{
        //     console.log(res);
        // })




