import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import EditProfileForm from './EditProfileForm.js';
import LoginForm from './LoginForm.js';
import RegisterForm from './RegisterForm.js';

/** Routes to pages on Jobly app depending on user log in,
 * shows different components
 *
 * Props:
 *  -user - either an object like
 *    {username, firstName, lastName, email, isAdmin} or null
 * -login - a function on the parent
 * -register - a function on the parent
 * -updateProfile - a function on the parent
 * -applyToJob - a function on the parent
 *
 * State: None
 *
 * If not logged in:
 * App -> RoutesList -> {Homepage, LoginForm, RegisterForm}
 *
 * If user is logged in:
 * App -> RoutesList ->
 *  {
 *      Homepage,
 *      CompanyList,
 *      JobList,
 *      EditProfileForm,
 *      CompanyDetail
 *  }
 *
 */
function RoutesList({
  user,
  login,
  register,
  editProfile,
  applyToJob }) {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {user
        ?
        <>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/jobs" element={<JobList applyToJob={applyToJob} />} />
          <Route path="/profile"
            element={<EditProfileForm user={user} editProfile={editProfile} />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
        </>
        :
        <>
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/register" element={<RegisterForm register={register} />} />
        </>
      }
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;