
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

import './components/MainPage.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchName:''
    }
    this.search=this.search.bind(this);
  }

   search(item){
     console.log('app entered');
     this.setState({searchName:item});
     console.log(this.state.searchName);
     
      
   }
  
   render() {
     
    return(
       <Fragment>
            <Header search={this.search} searchName={this.state.searchName} /> 
            <MainPage item={this.state.searchName}/>
        </Fragment>
 
         
    )
  }
}


export default App;
