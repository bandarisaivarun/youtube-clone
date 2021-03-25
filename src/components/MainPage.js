import React from 'react';
import {Col,Row} from 'reactstrap';
import YoutubeFrameVideo from './YoutubeMainFrame';
import YoutubeSearchList from './YoutubeSearchList';


class MainPage extends React.Component{
    
    
      render(){
        console.log('main render');
          return(
                <div className="conatiner">
                

                   
                  <div class="body" >
                       
                        <Row>
                        <Col lg={{size:7,offset:0}} md={{size:11,offset:0}} className="m-lg-3 m-md-3 m-sm-3" >
                              <YoutubeFrameVideo ></YoutubeFrameVideo>
                        </Col>
                        <Col lg={4} md={11} className="m-lg-3 m-md-3 m-sm-3">
                            <YoutubeSearchList  />
                        </Col>
                        </Row>
                       
                        
                        
                       {/* <div class="video-frame col-6">
                            <iframe src="" width="100%" ></iframe>
                        </div>
                        <div class="video-lists col-6">
                            <div>
                                <iframe src="" ></iframe>
                            </div>
                            <div>
                                <iframe src="" ></iframe>
                            </div>
                            <div>
                                <iframe src="" ></iframe>
                            </div>
                            <div>
                                <iframe src="" ></iframe>
                            </div>
                            <div>
                                <iframe src="" ></iframe>
                            </div>
                        </div>*/}
                  </div>
                  
              </div>
          )
      }
}



export default MainPage;