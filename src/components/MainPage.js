import React from 'react';
import {Col,Row} from 'reactstrap';
import YoutubeFrameVideo from './YoutubeMainFrame';
import YoutubeSearchList from './YoutubeSearchList';
import {request} from '../api/api';

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // users:[],
            // isLoading:true,
            // err:null
            user:''
        }
    this.searchQuery=this.searchQuery.bind(this);
 }
    searchQuery(){
        console.log('searchQuery enterd');
          this.setState({user: this.props.item});
          const r=this.state.user;
           const res= request.get(
                   'search',
                    { params:{
                       part:'snippet',
                       maxResults:5,
                       key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                       q:{r}
                   }
               }    
                
           )
           .then(response => {return response.data.items;})
           .catch(err=>{
              this.setState({err:err});
           })
           console.log(res);
           console.log(this.state.err);
    }
      render(){
        console.log('mainpage');
        console.log(this.props.item);
         this.searchQuery();
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