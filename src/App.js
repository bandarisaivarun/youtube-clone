
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import './components/MainPage.css';

import {request, videorequest} from './api/api';
import axios from 'axios';
import fetch from 'cross-fetch';
import './App.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchName:'',
         responseVideos:null,
         selectedVideo:null,
         videoStatisticsdetails:null,
         err:null,
         isLoading:''
    }
    this.searchQuery=this.searchQuery.bind(this);
    this.searchBarResult=this.searchBarResult.bind(this);
    this.handlechanneldetails=this.handlechanneldetails.bind(this);
    this.selectedVideoSatistics=this.selectedVideoSatistics.bind(this);
  }
  searchBarResult(resQuery){
    this.setState({searchName:resQuery});
    this.searchQuery(resQuery);
  }
  handlechanneldetails(videoId){
      const {responseVideos}=this.state;
      const result=responseVideos.filter(video=>{return videoId===video.id.videoId})[0];
      console.log(result);
      this.setState({selectedVideo:result});
      this.selectedVideoSatistics(result.id.videoId);
  }
  selectedVideoSatistics=async(videoid)=>{
     console.log('statistics entered');
     console.log(videoid);
      if(videoid !==null){
      
         const response=await axios.get('https://www.googleapis.com/youtube/v3/videos',{
           params:{
              id:`${videoid}`,
              key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
              part:'contentDetails,statistics'
             
             
           }
         });
         console.log('statistic middle');
         let res=await response.data.items[0];
        console.log(res);
        this.setState({ videoStatisticsdetails:res});
        console.log('statistic end..')
    
        
        
         
      }
  }
  searchQuery=async(result)=>{
    console.log('searchQuery enterd');
      this.setState({isLoading:true});
      
       const res=await request.get(
               'search',
                { params:{
                   part:'snippet',
                   maxResults:5,
                   key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                   q:result,
               }
           }    
            
       );
       
      
       console.log(res.data.items);
      await this.selectedVideoSatistics(res.data.items[0].id.videoId);
      console.log('search query middle');
       this.setState({responseVideos:res.data.items,
        selectedVideo:res.data.items[1]});
        

        this.setState({isLoading:false});    
        
       
       
       
      

}

  
   render(){

     console.log('app render');
     console.log(this.state.selectedVideo);
     console.log(this.state.videoStatisticsdetails);
     
     const {selectedVideo,responseVideos,isLoading,videoStatisticsdetails}=this.state;
    return(
       <Fragment>
          <div>
            <Header search={this.searchBarResult}  /> 
            <div style={{marginTop:"10px"}}>
                <MainPage videos={responseVideos} selectedVideo={selectedVideo} statisticsDetails={videoStatisticsdetails} handlechanneldetails={this.handlechanneldetails} isLoading={isLoading}/>
            </div>
          </div>
        </Fragment>
 
         
    )
  }
}


export default App;
