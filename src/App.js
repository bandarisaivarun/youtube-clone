
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import './components/MainPage.css';
import Home from './components/Home';
import ToggleBarItems from './components/ToggleBarItems';
import {request} from './api/api';
import axios from 'axios';
// import fetch from 'cross-fetch';
import './App.css';

import {  Redirect, Route,Switch } from 'react-router';
import { Link,withRouter } from 'react-router-dom';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchName:'',
         responseVideos:null,
         selectedVideo:null,
         videoStatisticsdetails:null,
         err:null,
         isLoading:'',
         trendingVideosList:null,
         isShow:false,
         comments:[]
    }
    this.searchQuery=this.searchQuery.bind(this);
    this.searchBarResult=this.searchBarResult.bind(this);
    this.handlechanneldetails=this.handlechanneldetails.bind(this);
    this.selectedVideoSatistics=this.selectedVideoSatistics.bind(this);
    this.TrendingVideos=this.TrendingVideos.bind(this);
    this.tVideoClick=this.tVideoClick.bind(this);
    this.toggleMethod=this.toggleMethod.bind(this);
  }
  toggleMethod(){
      this.setState({isShow:!this.state.isShow});
  }
  TrendingVideos(videos){
     console.log('trending method entered');
      this.setState({trendingVideosList:videos});
  }
  tVideoClick(video){

    console.log('tVideoClick');
    console.log(video);
    console.log(video.id.videoId);
    this.selectedVideoSatistics(video.id);
    this.setState({selectedVideo:video});
    this.searchQuery(video.id);
    this.props.history.push("/mainpage");

  }
  searchBarResult(resQuery){
    
    this.setState({selectedVideo:null,searchName:resQuery});
    this.searchQuery(resQuery);
  }
  handlechanneldetails(videoId){
      const {responseVideos}=this.state;
    

      const  result=responseVideos.filter(video=>{return videoId===video.id.videoId})[0];
      
      
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
              part:'snippet,statistics'
             
             
           }
         });
         console.log('statistic middle');
         let res=await response.data.items[0];
        console.log(res);
        const result=await axios.get('https://www.googleapis.com/youtube/v3/commentThreads',{
          params:{
            part:'snippet,replies',
            key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
            videoId:`${videoid}`

          }
        });
        console.log(result);
        let commentres=await result.data;
        console.log(commentres);
        this.setState({ videoStatisticsdetails:res,comments:commentres});
        console.log('statistic end..');
    
        
        
         
      }
  }
  searchQuery=async(result)=>{
    console.log('searchQuery enterd');
   
      
      this.setState({isLoading:true});
      
       const res=await request.get(
               'search',
                { 
                  params:{
                  part:'snippet',
                  maxResults:5,
                   key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                   q:result,
               }
           }    
            
       );
       
      
      console.log(res.data.items);
      if(this.state.selectedVideo==null){
          await this.selectedVideoSatistics(res.data.items[0].id.videoId);
          console.log('search query middle');
          this.setState({responseVideos:res.data.items,
          selectedVideo:res.data.items[1]});
       }
      else{
        this.setState({responseVideos:res.data.items});
      }
        

      this.setState({isLoading:false});    
        
       
       
       
      

}

 

  
   render(){
   const mainpage=()=>(<MainPage 
        videos={responseVideos} selectedVideo={selectedVideo}
         statisticsDetails={videoStatisticsdetails} 
         handlechanneldetails={this.handlechanneldetails} isLoading={isLoading}
         comments={comments}/>
         );
       

     console.log('app render');
     console.log(this.state.selectedVideo);
     console.log(this.state.videoStatisticsdetails);
     console.log(this.state.responseVideos);
     
     const {selectedVideo,responseVideos,
      isLoading,videoStatisticsdetails,
      trendingVideosList,err,isShow,comments}=this.state;
    if(err!=null){
      return(<div>{err}</div>);
    }
    else{
    
      return(
        <Fragment>
            <div>
              <Header search={this.searchBarResult} toggleMethod={this.toggleMethod} /> 
             
              <div className="d-flex App">
                <div >
                  <ToggleBarItems isShow={isShow} />
                </div>
                <div>
                  <Switch >
                  
                      <Route path="/Home"  ><Home TrendingVideos={this.TrendingVideos} trendingVideosList={trendingVideosList} tVideoClick={this.tVideoClick}/></Route>
                      
                      <Route path="/mainpage/:name" component={mainpage} />
                      <Redirect from="*" to="/Home" component={Home} />
                  
                    
                  </Switch>
                </div>
              </div>
            </div>
          </Fragment>
  
          
      )
    }
  }
}


export default withRouter(App);
