import { useEffect, useState } from "react";
import { Box } from '@material-ui/core';
import './ChannelComponent.css';

export const Channel=()=>{
    const [channelDetails, setchannelDetails] = useState({err:null,isLoading:false,channelDetails:''});
    useEffect(() => {

        window.gapi.load('client',()=>{
            window.gapi.client.request({
                'method': 'GET',
                'path': 'https://www.googleapis.com/youtube/v3/playlists',
                'params': {'part': 'contentDetails,snippet',
                            'channelId':'UCDhlrfAmZEQ-PBx9B2f3t3Q',
                            }
            }).then((res)=>{
                console.log('playlist:',res);
                
              
                
            })
            .catch((err)=>{
                console.log(err.message);
            });
            window.gapi.client.request({
                'method': 'GET',
                'path': 'https://www.googleapis.com/youtube/v3/channels',
                'params': {'part': 'contentDetails,snippet,statistics,brandingSettings',
                            'id':'UCZJlMUYdbtzQ8tVfLvK1KvQ',
                            }
            }).then((res)=>{
                console.log('channels:',res);
                
                // setisLoading(false);
                
            })
            .catch((err)=>{
                console.log(err.message);
            });
        })

        
    
    }, []);

    return(
        <div className="channelPage">
            <div className="channelPage-content">
                <div className="channel-header">
                    <div className="banner-section">
                        <img src={'https://lh3.googleusercontent.com/Un4L7EbDRakHarz_zxulLaLz4na21itOu97YzGXVHrbFSIxtixbCMgZgEiyEp0FPLtOfnXIfiA'} />
                    </div>
                    <div>
                        <span>
                            <img src={'https://yt3.ggpht.com/ytc/AKedOLQCacT6rJAqCpr0FYSbTPUcd_SA4HKs0XoZUKChMQ=s240-c-k-c0x00ffffff-no-rj'}  />
                        </span>
                        <div>
                            <span>coding ninjas</span>
                            <span>14000</span>
                        </div>
                    </div>
                    
                </div>
                <div className="channel-video-section">
                    <div className="channel">
                        <div className="channel-content">
                            <div className="image">
                                <img src={'https://yt3.ggpht.com/ytc/AKedOLQCacT6rJAqCpr0FYSbTPUcd_SA4HKs0XoZUKChMQ=s240-c-k-c0x00ffffff-no-rj'}/>
                            </div>
                            <div className="subscribed-details">
                                <Box className="desc" height="30%">dhf  sihfkjfh hfjdshfjjf</Box>
                                <span>code with interview</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}