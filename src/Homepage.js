import React, {useContext} from 'react'
import userContext from './userContext';
import {Link} from "react-router-dom"

/** Renders Jobly Homepage
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList -> Hompeage
 *
*/

function Homepage(){
  const user = useContext(userContext);
  console.log("Homepage", "user= ", user)
  return(
    <div className="Homepage">
      <h1 className="Homepage-title">Jobly</h1>
      <h2 >All the jobs in one, convenient place.</h2>
      { user.userData
        ? <p>Welcome back, {user.userData.firstName}</p>
        : <div>
            <Link to='/login' className="Homepage-btn">Log in</Link>
            <Link to='/register' className="Homepage-btn">Sign up</Link>
          </div>
      }
    </div>

  );
}

export default Homepage;