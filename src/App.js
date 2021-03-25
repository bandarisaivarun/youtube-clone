
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

import './components/MainPage.css';
import {request} from './api/api';
class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchName:'',
         err:null
    }
    this.searchQuery=this.searchQuery.bind(this);
    this.searchBarResult=this.searchBarResult.bind(this);
  }
  searchBarResult(resQuery){
    this.setState({searchName:resQuery});
    this.searchQuery(resQuery);
  }
  searchQuery(result){
    console.log('searchQuery enterd');
      
      
       const res=request.get(
               'search',
                { params:{
                   part:'snippet',
                   maxResults:5,
                   //key:'AIzaSyCa_VQeR8xS-jjUPnGXbDbRYcic859qeC0',
                   q:result
               }
           }    
            
       )
       .then(response => {return response;})
       .catch(err=>{
          return err;
       })
       console.log(res);
       //console.log(this.state.err);
}

  
   render() {
     console.log('app render');
    return(
       <Fragment>
            <Header search={this.searchBarResult}  /> 
            <hr />
            <MainPage item={this.state.searchName}/>
        </Fragment>
 
         
    )
  }
}


export default App;
