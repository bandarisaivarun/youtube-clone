import React from 'react';

import {AiFillYoutube,AiOutlineSearch} from 'react-icons/ai';




class MainPage extends React.Component{
      render(){
          return(
              <div class="Conatiner">
                  <div class='header'>
                        <AiFillYoutube /> 
                        <div class="search-box">
                              <input type='text' />
                              <button><AiOutlineSearch/></button>
                        </div>
                  </div>
                  <div>

                  </div>
                  <div>

                  </div>
              </div>
          )
      }
}

export default MainPage;