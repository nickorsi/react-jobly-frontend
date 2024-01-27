import { BrowserRouter } from "react-router-dom";
import Navigation from './Navigation';
import RoutesList from './RoutesList';
import JoblyApi from './api.js';
import React, { useEffect, useState } from 'react';
import './App.css';
import userContext from "./userContext.js";

/** Renders Jobly App and Navigation componenet
 *
 * Props: None
 *
 * State:
 * -user: State about user in object like {userData, isLoading}
 * -token: String representing token
 * -applications: Set of job IDs saved as numbers?
 *
 * App -> {Navigation, RoutesList}
 */

function App() {
  const [user, setUser] = useState({
    userData: null,
    isLoading: false,
  });
  const [token, setToken] = useState(checkLocalStorage());
  const [applications, setApplications] = useState([]);

  /**checkLocalStorage looks for a valid token in the client local storage
   * by the "_token" key.
   */
  function checkLocalStorage () {
    return localStorage.getItem("_token");
  }
  /**Get user data and set userData to userResult
   *  and isLoading to false if token exists */

  useEffect(function fetchUserDataOnMount() {
    async function fetchUserData() {
      const userResult = await JoblyApi.getUser(user.userData);
      console.log("userResult is:", userResult);
      setUser({
        userData: userResult,
        isLoading: false,
      });
    }
    if (token) fetchUserData();
  }, [token]);

  /**
   * loginUser function will take in an object with properties 'username' and
   * 'password' both with strings as values. Updates token state.
   */

  async function loginUser({ username, password }) {
    console.log("loginUser")
    const token = await JoblyApi.loginUser(username, password);
    localStorage.setItem("_token", token);
    setUser({
      userData: username,
      isLoading: true,
    });
    setToken(token);
  }

  /**
   * registerUser function will take in an object like
   * {username, password, firstName, lastName, email}.
   * Updates user state and token
   */

  async function registerUser({ username, password, firstName, lastName, email }) {
    const token = await JoblyApi.registerUser(
      username,
      password,
      firstName,
      lastName,
      email);
    localStorage.setItem("_token", token);
    setUser({
      userData: username,
      isLoading: true,
    });
    setToken(token);
  };


  /**
   * logoutUser function logs user out and resets token and user State.
   */

  function logoutUser() {
    setUser({
      userData: null,
      isLoading: false,
    });
    setToken(null);
  };

  /**
   * editProfile function takes in an object like
   * {username, firstName, lastName, email} and updates user state.
   */
  async function editProfile({username, firstName, lastName, email}) {
    const user = await JoblyApi.editUser(username, firstName, lastName, email);
    setUser({
      userData: user,
      isLoading: false
    })
  };

  /**
   * applyToJob function
   * //TODO:
   */
  function applyToJob(id) {
    console.log("applyToJob");
  };


  if(user.isLoading) return <p>Loading...</p>

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={user}>
          <Navigation logout={logoutUser} user={user.userData} />
          <RoutesList
            user={user.userData}
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
