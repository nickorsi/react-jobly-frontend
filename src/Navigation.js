import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

/** Displays navigatioal links to Home, Companies, and Jobs
 *
 * Props:
 * -logout: Callback function from parent
 * -user: data about the user
 *
 * State: None
 *
 * App -> Navigation
 *
 */

function Navigation({logout, user}){
  return(
      user.userData
        ? <nav className="Navigation">
            <NavLink to="/" end>Jobly</NavLink>
            <NavLink to="/companies" end>Companies</NavLink>
            <NavLink to="/jobs" end>Jobs</NavLink>
            <NavLink to="/profile" end>Profile</NavLink>
            <NavLink to="/" onClick={logout} end>Log out {user.username}</NavLink>
          </nav>
        : <nav className="Navigation">
            <NavLink to="/" end>Jobly</NavLink>
            <NavLink to="/login" end>Login</NavLink>
            <NavLink to="/register" end>Sign Up</NavLink>
          </nav>

      /* <NavLink to="/companies/baker-santos" end>Baker-Santos</NavLink> */
      /* Above link helps demonstrate potential for subtle bug on CompanyDetails
      useEffect, where if dependecy wasn't specified for company handle, could
      navigate to a page that did not demount the company info. */
  );
}

export default Navigation;