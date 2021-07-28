import { LibraryAddCheckRounded } from '@material-ui/icons';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import React from 'react';
import { Link, useLocation} from "react-router-dom";
import './ToggleComponent.css';


const ToggleComponent=(props)=>{
    const location=useLocation();
    console.log(location);
    console.log(props.isOpen);
    if(props.isOpen){
        if(location.pathname=='/channel/:channlId'){

        }
        return(
            
            <div className="toggle-bar align-self-stretch" ref={myref}>
                <div className="toggle-inner"> 
                    <Link className="toggle-link" to="/Home" >
                        <i class="material-icons"> home</i>
                        <span>Home</span>
                    </Link>
                    <Link className="toggle-link" to="/subscription" >
                        
                        <span><SubscriptionsIcon/></span>
                        <span>Subscription</span>
                    </Link>
                    <Link className="toggle-link" to="/playlist" >
                        <span><LibraryAddCheckRounded/></span>
                        <span>library</span>
                    </Link>
                </div>
            </div>
        )
    }
    else if(location.pathname=='/Home' && props.isOpen==false){
        console.log('props is false');
        return(
            // <div className="mini-toggle-bar align-self-stretch  p-1" style={{height:"90vh",width:"100px",display:"relative",border:"solid"}}>
            //     <div className="mini-toggle-inner"> 
            //         <div className="icon">
            //             <span className="slide-icon-name">
            //             <i class="material-icons"> home</i>
            //             </span>
            //             <span className="name">Home</span>
            //         </div>
            //         <div className="icon">
            //             <span className="slide-icon-name">
            //             <i class="material-icons"> subscriptions</i>
            //             </span>
            //             <span className="name">Subscriptions</span>
                        
            //         </div>
                   
            //     </div>
            // </div>
            <div className="mini-toggle-bar align-self-stretch" style={{height:"100%"}}>
                <div className="mini-toggle-inner"> 
                     <div className="icon" >
                         <span className="slide-icon-name">
                         <i class="material-icons"> home</i>
                         </span>
                         <span className="name">Home</span>
                     </div>
                     <div className="icon">
                         <span className="slide-icon-name">
                            <SubscriptionsIcon/>
                         </span>
                         <span className="name">Subscriptions</span>
                        
                    </div>
                    <div className="icon">
                         <span className="slide-icon-name">
                            <LibraryAddCheckRounded />
                         </span>
                         <span className="name">library</span>
                        
                    </div>
                   
                </div>
            </div>
        )
        
    }
    else{
        return(<div></div>);
    }
}

export default ToggleComponent;