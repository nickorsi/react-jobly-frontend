import { BrowserRouter } from "react-router-dom";
import  Navigation  from './Navigation'
import RoutesList from './RoutesList'
import JoblyApi  from './api.js';
import React, { useState } from 'react';
import './App.css';

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
  const [token, setToken] = useState();

  /**
   * loginUser function will take in strings 'username' and 'password'. Will
   * attempt to login user with a try/catch block. If successful, update token
   * state. If error, update user state with error.
   */

  async function loginUser(username, password) {
    let token;
    let user;
    try {
      token = await JoblyApi.getToken(username, password);
      user = await JoblyApi.getUser()
    } catch (err) {
      setUser({
        userData: null,
        isLoading: true,
        error: true
      })
    }
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
