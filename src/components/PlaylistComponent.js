import './PlaylistComponent.css';
import { useEffect ,useState} from 'react';
export const Playlist=()=>{
    const [Playlist, setPlaylist] = useState(null);
   useEffect(() => {
  
        // const [subscription, setsubscription] = useState('');
        
        
            window.gapi.load('client',()=>{
                window.gapi.client.request({
                    'method': 'GET',
                    'path': 'https://www.googleapis.com/youtube/v3/playlists',
                    'params': {'part': 'contentDetails,snippet,player',
                                //'Key':'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                                'mine': 'true',
                                'maxResults':15,
                                }
                }).then((res)=>{
                    console.log(res);
                    setPlaylist(res.result.items);

                })
            })
          

    
   }, [])
   console.log('playlist entere entered');
   if(Playlist!==null){
        return(
            <div className="playlist">
                <div>
                    <span className="playlist-title">Playlists</span>
                </div>
                 
                <div className="playlist-content">
                    
                    {
                        Playlist.map((playlistItem)=>{
                            return(
                                <div className="playlist-item">
                                    <div className="listitem-content">
                                        <span>
                                            <img src={playlistItem.snippet.thumbnails.medium.url} />
                                        </span>
                                        <div>
                                            <span>{playlistItem.snippet.localized.title}</span><br />
                                            <span>{playlistItem.snippet.channelTitle}</span>
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
        return(<div></div>)
    }
} 