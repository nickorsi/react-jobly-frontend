import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

/** Displays nav bar with links to Home, Companies, and Jobs
 *
 * Props: None
 *
 * State: None
 *
 * App -> Navigation
 *
 */

function Navigation(){
  return(
    <nav className="Navigation">
      <NavLink to="/" end>Jobly</NavLink>
      <NavLink to="/companies" end>Companies</NavLink>
      <NavLink to="jobs" end>Jobs</NavLink>
    </nav>
  );
}

export default Navigation;