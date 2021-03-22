
import React from 'react';
import {Form} from 'react-bootstrap';
import {AiFillYoutube} from 'react-icons/ai';
class MainPage extends React.Component{
     render(){
        return(
            <div class="Container">
                   <div class="youtube-icon">
                       <AiFillYoutube />
                   </div>
                   <div class="search">
                       <Form>
                            <input type="text" name="searchbox" />
                            <input type="submit" name='search' />
                       </Form>
                   </div>
            </div>
        )
     }
}

export default MainPage;