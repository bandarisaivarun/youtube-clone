import React from 'react';
import {request} from '../api/api';

class YoutubeSearchList extends React.Component{
     constructor(props){
            super(props);
            this.state={
                // users:[],
                // isLoading:true,
                // err:null
                user:''
            }
     }
     componentDidMount(){
           this.setState({user: this.props.items});
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
         return(
            <div class="video-lists ">
                <div>
                    <iframe title="" src="" ></iframe>
                </div>
                
            </div>
         )
     }

}

export default YoutubeSearchList;