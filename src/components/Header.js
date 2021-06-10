import  React from "react";
import {AiFillYoutube} from "react-icons/ai";
import {Col,Form,Row} from 'reactstrap';
import {withRouter,Link} from 'react-router-dom';




class Header extends React.Component{
    constructor(props){
       super(props);
        this.state={
            searchItemName:''
        }
       this.onSubmitForm=this.onSubmitForm.bind(this);
       this.searchInput=this.searchInput.bind(this);
       this.handleClick=this.handleClick.bind(this);
    }
    handleClick=()=>{
        this.props.toggleMethod();
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
        this.props.history.push(`/mainpage/${this.state.searchItemName}`);
        
    }
    // componentDidMount(){
    //     this.props.search(this.state.searchItemName);
    //     this.props.history.push("/mainpage",{state:this.state.searchItemName});
    // }
      render(){
        console.log('header render');
          return(
        
            <div className="header row ">
                
                        
                <div className="youtube-icon col-lg-4 col-md-3 col-sm-3">
                    <Row style={{background:"white"}}>
                        <span className="icon" onClick={(e)=>this.handleClick(e)}><AiFillYoutube /></span><span className="icon-name mt-3">Youtube</span>
                    </Row>
                </div>
                
                <div className="search-box col-lg-5 col-md-5 col-sm-5 mt-3"  >
                    <Form onSubmit={(values)=>this.onSubmitForm(values)} >
                        <Row className="align-items-center" style={{background:"white"}}>
                            <Col lg={9} sm={9} xs={6} className="d-flex align-items-center mr-0" style={{background:"inherit"}}> 
                            {/*   <input className="search" onChange={this.searchInput} />
                                <Button className="search-button ml-0" style={{background:"inherit"}}><img className="searchbtn" src="./images/searchicon.png"  height="22px"/></Button>
                            */}  <input class="searchinput" onChange={this.searchInput} value={this.state.searchItemName} />
                                <button className="search-btn" id="search-btn" style={{background:"inherit"}}><i class="fa fa-search"></i></button> 
                            </Col>  
                            
                        </Row>
                    </Form>  
                </div>  
                    
            </div>
           
        
          )
      }

}

export default withRouter(Header);