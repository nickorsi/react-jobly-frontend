import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api.js';
import React, { useEffect, useState } from 'react';
import './App.css';
import userContext from "./userContext.js";

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
      console.log("userResult is:", userResult);
      setUser({
        userData: userResult,
        isLoading: false,
        error: null
      });
    }
    if (token) fetchUserData();
  }, [token]);

  /**
   * loginUser function will take in an object with properties 'username' and
   * 'password' both with strings as values. Will attempt to login user with a
   * try/catch block. If successful, update token state. If error, update user
   * state with error.
   */

  async function loginUser({ username, password }) {
    let token;
    try {
      token = await JoblyApi.getToken(username, password);
      setUser({
        userData: username,
        isLoading: true,
        error: null
      });
      setToken(token);
    } catch (err) {
      console.log("login error!");
      setUser({
        userData: null,
        isLoading: true,
        error: true
      });
    }
  }

  /**
   * registerUser function
   *
   */
  function registerUser() {
    console.log("RegisterUser");
  };
  /**
   * logoutUser function
   */

  function logoutUser() {
    setUser({
      userData: null,
      isLoading: false,
      error: null
    });
    setToken(null);
  };

  /**
   * editProfile function
   */
  function editProfile() {
    console.log("editProfile");
  };

  /**
   * applyToJob function
   */
  function applyToJob(id) {
    console.log("applyToJob");
  };

  // if(user.isLoading) return <p>Loading...</p>

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={user}>
          <Navigation logout={logoutUser} user={user} />
          <RoutesList
            user={user}
            login={loginUser}
            register={registerUser}
            editProfile={editProfile}
            applyToJob={applyToJob}
          />
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
