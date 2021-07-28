import {Route,Redirect, useHistory} from 'react-router';
import LoadingSpin from "./LoadingSpin";
export const ProtectedRoute=({children,...rest})=>{
    const location=useHistory();
    console.log(location);
    console.log('protected route entered');
    console.log('rest',rest)
    console.log('children',children)
    console.log(rest.isSignedIn);
    return(
        <Route
             {...rest}
            render={() =>
            rest.isSignedIn!==null?
                (
                    rest.isSignedIn==true ? (
                        children
                    ) : (
                        <Redirect
                        to={{
                            pathname: "/login",
                        
                        }}
                        />)
                )
                :<div style={{background:"white"}}>
                    <LoadingSpin />
                    {/* loading.. */}
                 </div>
            }
        />
    )
}