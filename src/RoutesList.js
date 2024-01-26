import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";

/** Routes to pages on Jobly app depending on path, shows different components
 *
 * Props:
 * -login - a function on the parent
 * -register - a function on the parent
 * -updateProfile - a function on the parent
 * -userData - either an object like
 *    {username, firstName, lastName, email, isAdmin} or null
 * -applyToJob - a function on the parent
 *
 * State: None
 *
 * App -> RoutesList -> {Homepage, CompanyList, CompanyDetail, JobList}
 */
function RoutesList({
  login,
  register,
  updateProfile,
  userData,
  applyToJob }) {

  return (
    <div>
      {userData
        ?
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList applyToJob={applyToJob} />} />
          <Route
            path="/profile"
            element={<ProfileEditForm
              updateProfile={updateProfile} />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        :
        <Routes>
          <Route
            path="/login"
            element={<LoginForm
              loginUser={login} />} />
          <Route
            path="/register"
            element={<RegisterForm
              register={register} />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default RoutesList;