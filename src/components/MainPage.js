import React from 'react';
import {Col,Row} from 'reactstrap';
import YoutubeMainFrame from './YoutubeMainFrame';
import YoutubeSearchList from './YoutubeSearchList';


class MainPage extends React.Component{
     state={
        
            videoid:'',
             
        
     }

      channelDetails=(videoId)=>{
            // const {selectedVideo,videos}=this.props;
            // console.log(videoId);
            // console.log('enterd channel details');
            // this.setState(selectedVideo);
            this.props.handlechanneldetails(videoId);
            
            
     }
    
      render(){
        console.log('main render');
        console.log(this.state.videoid);
        
        const {videos,selectedVideo}=this.props;
        console.log(selectedVideo);
          return(
                <div className="conatiner">
                

                   
                  <div className="body" >
                       
                        <Row>
                        <Col lg={{size:6,offset:0}} md={{size:11,offset:0}} className="m-lg-3 m-md-3 m-sm-3" >
                              <YoutubeMainFrame videoLists={videos} videoclick={this.state.videoid} video={selectedVideo}></YoutubeMainFrame>
                        </Col>
                        <Col lg={5} md={11} className="m-lg-3 m-md-3 m-sm-3">
                            <YoutubeSearchList  videoLists={videos} channelDetails={this.channelDetails}  />
                        </Col>
                        </Row>
                       
                        
                        
                       
                  </div>
                  
              </div>
          )
      }
}



export default MainPage;