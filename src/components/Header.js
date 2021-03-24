import  React from "react";
import {AiFillYoutube,AiOutlineSearch} from "react-icons/ai";
import {Col,Form,Row,Button} from 'reactstrap';

import {FormControl} from 'react-bootstrap';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchItemName:''
        }
       this.onSubmitForm=this.onSubmitForm.bind(this);
       this.handleInput=this.handleInput.bind(this);
    }
    
    handleInput(event){
        event.preventDefault();
        this.setState({searchItemName:event.target.value});
        console.log(this.state.searchItemName);
    }
     onSubmitForm(event){
         event.preventDefault();
         this.props.searchItem(this.state.searchItemName);
         
    }
      render(){
          return(
            <div class="header row">

                     
            <div class="youtube-icon col-lg-4 col-md-3 col-sm-3">
                <Row>
                    <span class="icon"><AiFillYoutube />
                    </span><span class="icon-name mt-3">Youtube</span>
                 </Row>
            </div>
             
            <div class="search-box col-lg-5 col-md-4 col-sm-6" >
                <Form onSubmit={(e)=>this.onSubmitForm(e)}>
                    <Row class="align-items-center mt-3">
                        <Col lg={9} sm={9} xs={6} class="align-items-center"> 
                            <FormControl onChange={(e)=>this.handleInput(e)} />   
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