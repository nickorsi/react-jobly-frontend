import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList"
import JobList from "./JobList"
import CompanyDetail from "./CompanyDetail"

/** Routes to pages on Jobly app depending on path, shows different components
 *
 * Props: None
 *
 * State: None
 *
 * App -> RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/companies" element={<CompanyList />}/>
      <Route path="/jobs" element={<JobList />}/>
      <Route path="/companies/:handle" element={<CompanyDetail />}/>
      <Route path="/*" element={<Navigate to="/"/> }/>
    </Routes>
  );
}

export default RoutesList;