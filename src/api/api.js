import React,{Component} from 'react';
import axios from 'axios';

class api extends Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            err:null,
            isloading:true
        }
    }
    componentDidMount(){
        const request = axios.create({
            baseURL: 'https://www.googlepapis.com/youtube/v3',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                // or whatever you want, in key/value pair
            }
        })
        // Now, you can use it like this -> request.get() or request.post()
        request.get('users')
            .then(users=>{
                this.setState({
                    users:users.data,
                    isloading:false
                })   
            })
            .catch(err=>{
                this.setState=({
                    err,
                    isloading:false
                })
            })
    }
    
}

export default api;