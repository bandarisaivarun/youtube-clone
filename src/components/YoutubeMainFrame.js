import React,{Component} from 'react';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';


class YoutubeFrameVideo extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            isloading:true,
            err:null
        }
        
    }
    render(){
        return(
            <div class="video-frame " style={{height:'auto'}}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <iframe src="" width="100%" ></iframe>
                </ResponsiveEmbed>
            </div>
        )
    }
}

export default YoutubeFrameVideo;