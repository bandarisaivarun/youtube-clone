import React from 'react';
import { useParams} from 'react-router';
import {Col,Row} from 'reactstrap';
import YoutubeMainFrame from './YoutubeMainFrame';
import YoutubeSearchList from './YoutubeSearchList';
import {withRouter} from 'react-router-dom';


class MainPage extends React.Component{
     constructor(props){
           super(props);
           this.state={
        
                  videoid:'',
                  nextcomments:'',
                  prevToken:''
           }

     } 

     nextCommentMethod=(result,token)=>{
            this.setState({nextcomments:result,prevToken:token})
     }
     

      channelDetails=(videoId)=>{
            
            this.props.handlechanneldetails(videoId);
            
            
      }
    
      render(){
        console.log('main render');
        console.log(this.state.videoid);
        console.log(this.props.result);
       // console.log(this.props.location.state);
       const { id } = this.props.match.params;
        console.log(id);
        const {videos,selectedVideo,statisticsDetails,isLoading,comments}=this.props;
        console.log(selectedVideo);
        console.log(statisticsDetails);
        const commentresult=this.state.nextcomments?this.state.nextcomments:comments;
        
          return(
                
                

                   //height:"90vh",width:"95%
                  <div className="mainpage " style={{border:"solid",overflowY:"scroll",overflowX:"hidden",display:"block",position:"absolute",height:"90vh",width:"100%"}}>
                     
                        <Row>
                        <Col lg={{size:7,offset:0}} md={{size:11,offset:0}} className="m-lg-3 m-md-3 m-sm-3" >
                              <YoutubeMainFrame  videoclick={this.state.videoid} video={selectedVideo} isLoading={isLoading} statisticsDetails={statisticsDetails} commentMethod={this.nextCommentMethod} comments={commentresult } prevToken={this.state.prevToken}></YoutubeMainFrame>
                        </Col>
                        <Col lg={3} md={11} className="search-list m-lg-3 m-md-3 m-sm-3">
                            <YoutubeSearchList  videoLists={videos} channelDetails={this.channelDetails} isLoading={this.props.isLoading}  />
                        </Col>
                        </Row>
                       
                        
                        
                       
                  </div>
             
          )
      }
}



export default withRouter(MainPage);