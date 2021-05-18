import React from 'react';
import {Col,Row} from 'reactstrap';
import YoutubeMainFrame from './YoutubeMainFrame';
import YoutubeSearchList from './YoutubeSearchList';


class MainPage extends React.Component{
     constructor(props){
           super(props);
           this.state={
        
                  videoid:'',
           }

     } 
     

      channelDetails=(videoId)=>{
            
            this.props.handlechanneldetails(videoId);
            
            
     }
    
      render(){
        console.log('main render');
        console.log(this.state.videoid);
        
        
        const {videos,selectedVideo,statisticsDetails,isLoading}=this.props;
        console.log(selectedVideo);
        console.log(statisticsDetails);
          return(
                
                

                   
                  <div className="body">
                       
                        <Row>
                        <Col lg={{size:6,offset:0}} md={{size:11,offset:0}} className="m-lg-3 m-md-3 m-sm-3" >
                              <YoutubeMainFrame  videoclick={this.state.videoid} video={selectedVideo} isLoading={isLoading} statisticsDetails={statisticsDetails}></YoutubeMainFrame>
                        </Col>
                        <Col lg={5} md={11} className="search-list m-lg-3 m-md-3 m-sm-3">
                            <YoutubeSearchList  videoLists={videos} channelDetails={this.channelDetails} isLoading={this.props.isLoading}  />
                        </Col>
                        </Row>
                       
                        
                        
                       
                  </div>
             
          )
      }
}



export default MainPage;