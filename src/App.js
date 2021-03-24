
import React,{Fragment} from 'react';
import MainPage from './components/MainPage';
import'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

import './components/MainPage.css';

class App extends React.Component{
   render() {
     
    return(
       <Fragment>
            <Header /> 
            <MainPage />
        </Fragment>
 
         
    )
  }
}


export default App;
