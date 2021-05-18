import React from 'react';
import './LoadingSpin.scss';
const LoadingSpin=()=>{
    console.log('loading spin');
    return(
        
        <div class="showbox" style={{background:"inherit"}}>
        <div class="loader" style={{background:"inherit"}}>
            <svg class="circular" viewBox="25 25 50 50" style={{background:"inherit"}}>
            <circle class="path" cx="50" cy="50" r="10" fill="none" stroke-width="2" stroke-miterlimit="10"/>
            </svg>
        </div>
        </div>
        //  <div></div>
    )

}

export default LoadingSpin;