
import axios from 'axios';



export const request = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            
    });

export const videorequest=axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
})
       
   
