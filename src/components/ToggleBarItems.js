import React from 'react';
import { Link, useLocation} from "react-router-dom";

const ToggleBarItems=(props)=>{
    const location=useLocation();
    console.log(location.pathname);
    console.log(props.isShow);
    if(props.isShow){
        return(
            
            <div className="toggle-bar align-self-stretch" style={{border:"solid",height:"90vh",width:"200px"}}>
                <Link to="/Home" >Home</Link>
                <Link to="/about" >About me</Link>
            </div>
        )
    }
    else if(location.pathname=='/Home' && props.isShow==false){
        console.log('props is false');
        return(
            <div className="toggle-bar align-self-stretch  p-1" style={{border:"solid",height:"90vh",width:"100px"}}>
                data hide
            </div>
        )
        
    }
    else{
        return(<div></div>);
    }
}

export default ToggleBarItems;