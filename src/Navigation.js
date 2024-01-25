import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css'

/** Displays navigatioal links to Home, Companies, and Jobs
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
      {/* <NavLink to="/companies/baker-santos" end>Baker-Santos</NavLink> */}
      {/* Above link helps demonstrate potential for subtle bug on CompanyDetails
      useEffect, where if dependecy wasn't specified for company handle, could
      navigate to a page that did not demount the company info. */}
    </nav>
  );
}

export default Navigation;