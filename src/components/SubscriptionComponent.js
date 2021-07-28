import './SubscriptionComponent.css';
import { useEffect,useState } from 'react';
import { Box } from '@material-ui/core';
import LoadingSpin from './LoadingSpin';
export const Subscription=()=>{

    const [SubscribedChannel, setSubscribedChannel] = useState(null);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {       
        
     console.log('subscription use effect entered')
     setisLoading(true);
            window.gapi.load('client',()=>{
                window.gapi.client.request({
                    'method': 'GET',
                    'path': 'https://www.googleapis.com/youtube/v3/subscriptions',
                    'params': {'part': 'contentDetails,snippet',
                                'mine': 'true',
                                'maxResults':'15'
                                }
                }).then((res)=>{
                    console.log(res);
                    setSubscribedChannel(res.result.items);
                    setisLoading(false);
                    
                })
                .catch((err)=>{
                    console.log(err.message);
                })  
            });
        }, []);
    console.log('subscription entered');
    console.log(SubscribedChannel);
    console.log(isLoading);
    if(isLoading){
        return(
            <div style={{background:"white"}}>
                <LoadingSpin />
              
            </div>
        )
    }
    else if(SubscribedChannel!=null){
        return(
            <div className="subscription">
                <div className="subscription-content">
                    <span className="subscription-title">Subscriptions</span>
                    {
                       SubscribedChannel.map((channel)=>{
                           return(
                                <div className="channel">
                                    <div className="channel-content">
                                        <div className="image">
                                            <img src={channel.snippet.thumbnails.medium.url}/>
                                        </div>
                                        <div className="subscribed-details">
                                            <Box className="desc" height="30%">{channel.snippet.description}</Box>
                                            <span>{channel.snippet.title}</span>
                                        </div>
                                    </div>
                                </div>
                           )    
                       })
                    }
                </div>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
    
}