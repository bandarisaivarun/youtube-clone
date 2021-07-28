
import React,{Fragment} from 'react';

import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Home from './components/HomeComponent';
import ToggleComponent from './components/ToggleComponent';
import { Mainpage } from './components/MainpageComponent';
import { Subscription } from './components/SubscriptionComponent';
import { Login } from "./components/LoginComponent";
import {ProtectedRoute} from './components/ProtectedRoute';
import {Playlist} from './components/PlaylistComponent';
import { Channel } from "./components/ChannelComponent";
//import { ErrorBoundary } from './components/Demo2';

// import fetch from 'cross-fetch';
import './App.css';

import {  Redirect, Route,Switch } from 'react-router';
import { Link,withRouter } from 'react-router-dom';
import { playlist } from './Hooks/CustomHooks';

class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
       isToggleBarOpen:false,
       isSignedIn:null,
       isAuthorized:null,
     }
   }
 
 
 
  toggleMethod=()=>{

    this.setState({isToggleBarOpen:!this.state.isToggleBarOpen});
  
  }
  SignedInUpdate=()=>{
    this.setState({isSignedIn:!this.state.isSignedIn});
  }

  setAuthorizedrequest=async()=>{
    console.log('Authorizedrequest method entered');
    const AuthInstance=window.gapi.auth2.getAuthInstance()
    const SCOPE='https://www.googleapis.com/auth/youtube.readonly';
    var user=AuthInstance.currentUser.get();
    console.log(user);
  }

  initializeGoogleSignIn=()=>{
    window.gapi.load('auth2',()=>{
        window.gapi.auth2.init({
          
            clientId:'403730852482-u5sgud6a6elds8vfc8hkovad4d2va90v.apps.googleusercontent.com',
            discoveryDocs:'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest',
            scope:'https://www.googleapis.com/auth/youtube.readonly'
        }).then(()=>{
            const AuthInstance=window.gapi.auth2.getAuthInstance()
            const isSigned=AuthInstance.isSignedIn.get();
            console.log('componentDidMount signin value:',isSigned);
            this.setState({isSignedIn:isSigned})
            AuthInstance.isSignedIn.listen((isSignedIn)=>{
              //console.log(isSignedIn);
                this.setState({isSignedIn});
            });
            var signin=AuthInstance.isSignedIn.get()
            if(signin){
              this.setAuthorizedrequest()
            }   
        })
    })
}

componentDidMount(){
    console.log('cpmponent entered')
    const script=window.document.createElement('script');
    script.src='https://apis.google.com/js/platform.js';
    script.onload=()=>this.initializeGoogleSignIn()
    window.document.body.appendChild(script);
    
}


  
   render(){ 
       const {isToggleBarOpen}=this.state;
       console.log('App entered');
       console.log('signIn:',this.state.isSignedIn);
      return(
        <Fragment>
            <Header toggleMethod={this.toggleMethod} SignedInUpdate={this.SignedInUpdate} isSignedIn={this.state.isSignedIn} />
            <div className="main-section">
              <div className="toggle-div" style={{maxWidth:"200px"}}>
                <ToggleComponent isOpen={isToggleBarOpen} />
              </div>
              <div className="content-section">
                <Switch>
                  <Route path="/Home"><Home/></Route>
                  <Route path="/mainpage/:name"><Mainpage/></Route>
                  <ProtectedRoute path="/subscription" isSignedIn={this.state.isSignedIn}>
                    <Subscription/>
                  </ProtectedRoute>
                  <ProtectedRoute path="/playlist" isSignedIn={this.state.isSignedIn}>
                    <Playlist />
                  </ProtectedRoute>
                  <ProtectedRoute path="/channel/:channelId" isSignedIn={this.state.isSignedIn}>
                    <Channel />
                  </ProtectedRoute>
                  <Route path="/login" ><Login isSignedIn={this.state.isSignedIn} /></Route>

                  <Redirect from="*" to="/Home" />
                </Switch>
              </div>
            </div>
            

        </Fragment>
  
          
      )
    }
  }



export default App;
