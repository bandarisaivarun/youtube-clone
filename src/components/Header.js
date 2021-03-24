import  React from "react";
import {AiFillYoutube,AiOutlineSearch} from "react-icons/ai";
import {Col,Form,Row,Button} from 'reactstrap';

import {FormControl} from 'react-bootstrap';


class Header extends React.Component{
      render(){
          return(
            <div className="header row">

                     
            <div class="youtube-icon col-lg-4 col-md-3 col-sm-3">
                <Row>
                    <span class="icon"><AiFillYoutube />
                    </span><span class="icon-name mt-3">Youtube</span>
                 </Row>
            </div>
             
            <div className="search-box col-lg-5 col-md-4 col-sm-6" >
                <Form>
                    <Row className="align-items-center mt-3">
                        <Col lg={9} sm={9} xs={6} className="align-items-center"> 
                            <FormControl />   
                        </Col>  
                        <Button ><AiOutlineSearch/></Button>  
                    </Row>
                </Form>  
            </div>       
        </div>
          )
      }

}

export default Header;