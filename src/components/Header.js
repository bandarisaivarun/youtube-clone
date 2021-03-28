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
       this.searchInput=this.searchInput.bind(this);
    }
    
    searchInput=(event)=>{
       //event.preventDefault();
        
        this.setState({searchItemName:event.target.value});
        // if(this.state.searchItemName!==''){
        
        // }
    };
     onSubmitForm(event){
        event.preventDefault();
         console.log(this.state.searchItemName);
        
        this.props.search(this.state.searchItemName);
        
    }
      render(){
        console.log('header render');
          return(
            <div className="header row">

                     
            <div className="youtube-icon col-lg-4 col-md-3 col-sm-3">
                <Row>
                    <span className="icon"><AiFillYoutube />
                    </span><span className="icon-name mt-3">Youtube</span>
                 </Row>
            </div>
             
            <div className="search-box col-lg-5 col-md-4 col-sm-6 mt-3" >
                <Form onSubmit={(values)=>this.onSubmitForm(values)}>
                    <Row className="align-items-center">
                        <Col lg={9} sm={9} xs={6} className="align-items-center mr-0"> 
                            <FormControl  onChange={this.searchInput} />   
                        </Col>  
                        <Button className="ml-0" ><AiOutlineSearch/></Button>  
                    </Row>
                </Form>  
            </div>       
        </div>
          )
      }

}

export default Header;