
import axios from 'axios';


export const request = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            
           
        })
        // Now, you can use it like this -> request.get() or request.post()
     /* 
     timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                // or whatever you want, in key/value pair
            }
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
            }) */
   

