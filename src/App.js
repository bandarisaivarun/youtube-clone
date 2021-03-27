
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

import './components/MainPage.css';
import {request} from './api/api';
class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchName:'',
         responseVideos:[],
         selectedVideo:null,
         err:null
    }
    this.searchQuery=this.searchQuery.bind(this);
    this.searchBarResult=this.searchBarResult.bind(this);
  }
  searchBarResult(resQuery){
    this.setState({searchName:resQuery});
    this.searchQuery(resQuery);
  }
  searchQuery=async(result)=>{
    console.log('searchQuery enterd');
      
      
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
       this.setState({responseVideos:res.data.items,selectedVideo:res.data.items[0]});
       
       
      

}

  
   render() {
     console.log('app render');
     console.log(this.state.responseVideos);
     console.log(this.state.selectedVideo);
     const {selectedVideo,responseVideos}=this.state;
    return(
       <Fragment>
            <Header search={this.searchBarResult}  /> 
            <hr />
            <MainPage videos={responseVideos} selectedVideo={selectedVideo}/>
        </Fragment>
 
         
    )
  }
}


export default App;
