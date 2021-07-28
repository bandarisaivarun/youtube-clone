import { Redirect, useHistory } from "react-router";



export const Login=(props)=>{
    const history=useHistory();
    console.log('login entered');
    console.log(history)
    console.log('isSigned in :',props.isSignedIn);
    console.log(history.goBack)

    if(props.isSignedIn===true){
        return(
            <Redirect to={`/${history.goBack}`}/>
        )
    }
    return(
        <div>Login page</div>
    )
}