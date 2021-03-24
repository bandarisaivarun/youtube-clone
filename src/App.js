
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

import './components/MainPage.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
         searchItem:''
    }
    this.searchItem=this.searchItem.bind(this);
  }

   searchItem(search){
     if(search!==''){
      this.setState({searchItem:search}) ;
      console.log(this.state.searchItem);
     }
      
   }
  
   render() {
     
    return(
       <Fragment>
            <Header searchItem={this.searchItem} /> 
            <MainPage item={this.state.searchItem}/>
        </Fragment>
 
         
    )
  }
}


export default App;
