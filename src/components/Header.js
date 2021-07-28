import  React,{useEffect} from "react";
//import {AiFillYoutube} from "react-icons/ai";
import './Header.css';
import {withRouter} from 'react-router-dom';
import {Modal,ModalBody,ModalHeader,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import { ToggleButton } from "react-bootstrap";
    // const SignedButtonClicked=()=>{
        
    // }

    // useEffect(() => {
    //     const authInstance=window.gapi.auth2.getAuthInstance()
    //     authInstance.isSignedIn.listen(()=>{
    //         SignedInUpdate()
    //     });
    // }, [])
    
    // if(isSignedIn===null){
    //     return  <span>loading</span>
    // }
    // else{
    //     console.log(isSignedIn);
    //     window.gapi.load('signin2',()=>{
    //         window.gapi.signin2.render('login-button');
    //     })
    //     if(isSignedIn!==false){
    //         const authInstance=window.gapi.auth2.getAuthInstance()
    //         var user=authInstance.currentUser.get();
    //         var profileinfo=user.getBasicProfile();

    //         //console.log('profile',profile)
    //         const email=profileinfo.getEmail();
    //         const name=profileinfo.getName();
    //         const imgurl=profileinfo.getImageUrl();
    //         return(
    //             <div className="login" style={{background:"inherit"}}>
    //                 <div className="toggle-profile">
    //                     <div className="profile-content">
    //                         <img src={imgurl}/>
    //                         <div className="info">
    //                             <span className="profile-name">{name}</span>
    //                             <span className="profile-emailid">{email}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div onClick={()=>{
    //                                         authInstance.signOut()
    //                                         }}
    //                                 color="primary">logout
    //                             </div>
                    
    //             </div>
    //         )
    //     }
    //     else{
    //         const authInstance=window.gapi.auth2.getAuthInstance()
    //         return(
    //             <div className="login" style={{background:"inherit"}}>
    //                 <div className="toggle-profile">
    //                     <div className="profile-content">
    //                         image
    //                         <div className="info">
    //                             <span className="profile-name">name</span>
    //                             <span className="profile-emailid">email</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div id="login-button" color="primary" 
    //                                         >signin</div>
    //                 {/* {isSignedIn?<div onClick={()=>{
    //                                         authInstance.signOut()
    //                                         .then(()=>console.log('sign out'))}}
    //                                 color="primary">logout
    //                             </div>:<div id="login-button" color="primary">signin</div>} */}
    //                 {/* {isSignedIn?<div 
    //                             :<div></div>} */}
    //             </div>
    //         )
    //     }
    // }
class Login extends React.Component{

    componentDidMount() {
        window.gapi.load('signin2',()=>{
            window.gapi.signin2.render('login-button');
        })
    }
        //const AuthInstance=window.gapi.auth2.getAuthInstance();
        // AuthInstance.isSignedIn.listen((isSignedIn)=>{
        //     this.props.SignedInUpdate();
        // });

    render(){
    console.log(this.props.isSignedIn)
    if(this.props.isSignedIn===null){
      
        return <div>loading</div>
    }
    const AuthInstance=window.gapi.auth2.getAuthInstance();
    if(this.props.isSignedIn==false){
        console.log('false block entered');
        
        return(
            <div>
                <div id="login-button" >sign in</div>
            </div>
        )
    }
    else if(this.props.isSignedIn===true){
        console.log('true block entered');
        //const authInstance=window.gapi.auth2.getAuthInstance()
            var user=AuthInstance.currentUser.get();
            var profileinfo=user.getBasicProfile();

            //console.log('profile',profile)
            const email=profileinfo.getEmail();
            const name=profileinfo.getName();
            const imgurl=profileinfo.getImageUrl();
        return(
            <div className="login" style={{background:"inherit"}}>
                     <div className="toggle-profile">
                         <div className="profile-content">
                             {imgurl}
                             <div className="info">
                                 <span className="profile-name">{name}</span>
                                 <span className="profile-emailid">{email}</span>
                             </div>
                        </div>
                     </div>
                <Button onClick={()=>AuthInstance.signOut().then(()=>this.props.ToggleModal()).then(()=>this.props.SignedInUpdate())}>logout</Button>
                
            </div>
        )
    }
    else{
        return<div>
        </div>;
        }
    }
    

}



class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchItem:null,
            isModalOpen:false,
            profile:null,
            backdrop:true,
            email:null,
            name:null,
            imgurl:null
            
        }
    }

   
    
    
     handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.searchItem);
        this.props.history.push(`/mainpage/${this.state.searchItem}`);
    }
     handleChange=(event)=>{
        event.preventDefault();
        this.setState({searchItem:event.target.value});

    }
    ToggleModal=()=>{
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    render(){
        console.log('header entered');
        console.log('signIn value:',this.props.isSignedIn);
        
        
        
        return(
            <div className="header" >
                <div className="header-content">
                    <div className="icons">
                        <div className="listicon">
                            <i class="fa fa-bars" style={{color:"rgb(235, 54, 54)"}} onClick={()=>this.props.toggleMethod()} aria-hidden="true"></i>
                        </div>
            
                        <div className="youtubeiconlayout sec1" ref={this.sec1}>
                            <span ><i class="youtube-icon fa fa-youtube-play" aria-hidden="true"></i></span>
                            <span className="youtube-name">Youtube</span>
                        </div>
                    </div>
                    <div className="search-section" ref={this.sec2} >
                        <form  className="search-box" onSubmit={(e)=>this.handleSubmit(e)}>
                           {  /* style={{background:"white",justifyContent:"center"}} */}
                            
                            <input class="searchinput" onChange={(e)=>this.handleChange(e)}  />
                            <button className="search-btn" id="search-btn " ><i class=" fa fa-search"></i></button> 
                        </form>  
                        
                    </div> 
                    <div className="signin" >
                        {/* <Login isSignedIn={this.state.isSignedIn}/> */}
                         <span className="profile"  onClick={()=>this.ToggleModal()} style={{background:"inherit"}}>
                            <i class="material-icons">person</i>
                        </span> 
                    </div> 
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.ToggleModal} backdrop={this.state.backdrop} >
                    <ModalHeader toggle={this.ToggleModal} >profile</ModalHeader>
                    <ModalBody>
                        
                        <div className="signin-out">
                            {this.props.isSignedIn===null?<div>loading</div>: <Login isSignedIn={this.props.isSignedIn} SignedInUpdate={this.props.SignedInUpdate} ToggleModal={this.ToggleModal}/>}
                           
                            
                        </div>
                             
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default withRouter(Header);