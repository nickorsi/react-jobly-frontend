import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import EditProfileForm from './EditProfileForm.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';

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
  user,
  login,
  register,
  editProfile,
  applyToJob }) {

  return (
    <div>
      {user.userData
        ?
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList applyToJob={applyToJob} />} />
          <Route
            path="/profile"
            element={<EditProfileForm
              updateProfile={editProfile} />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        :
        <Routes>
          <Route
            path="/login"
            element={<LoginForm
              login={login}
              user={user}
            />} />
          <Route
            path="/register"
            element={<RegisterForm
              register={register}
              user={user}
            />} />
           <Route path="/" element={<Homepage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      }
    </div>
  );
}

export default RoutesList;