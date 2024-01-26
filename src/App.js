import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api.js';
import React, { useEffect, useState } from 'react';
import './App.css';

//TODO: Homepage, set a ternary so that if a user is logged in, then display
//homepage with greeting and user's name, else, display login, signup buttons

//TODO: Navigation, set a ternary so that if a user is logged in,
// then display nav with navlinks to home, companies, profile, jobs, logout
// else display home, login, signup

//TODO: login:



/** Renders Jobly App and Navigation componenet
 *
 * Props: None
 *
 * State:
 * -user: State about user in object like {userData, isLoading, error}
 * -token: String representing token
 * -applications: Set of job IDs saved as numbers?
 *
 * App -> {Navigation, RoutesList}
 */
function App() {
  const [user, setUser] = useState({
    userData: null,
    isLoading: true,
    error: null
  });
  const [token, setToken] = useState(null);


/**Get user data and set userData if token exists */
  useEffect(function fetchUserDataOnMount() {
    async function fetchUserData() {
      const userResult = await JoblyApi.getUser(user.userData);
      console.log("userData is:", userData);
      setUser({
        userData: userResult,
        isLoading: false,
        error: null
      });
    }
    if (token) fetchUserData();
  }, [token]);

/**
 * loginUser function will take in strings 'username' and 'password'. Will
 * attempt to login user with a try/catch block. If successful, update token
 * state. If error, update user state with error.
 */

//TODO: rename this async function
async function loginUser(username, password) {
  let token;
  try {
    token = await JoblyApi.getToken(username, password);
  } catch (err) {
    setUser({
      userData: null,
      isLoading: true,
      error: true
    });
  }
  setUser({
    userData: username,
    isLoading: true,
    error: null
  });
  setToken(token);
}

/**
 * registerUser function
 */

/**
 * logoutUser function
 */

/**
 * updateProfile function
 */

/**
 * applyToJob function
 */

if(user.isLoading) return <p>Loading...</p>

return (
  <div className="App">
    <BrowserRouter>
      <Navigation />
      <RoutesList />
    </BrowserRouter>
  </div>
);
}

export default App;
