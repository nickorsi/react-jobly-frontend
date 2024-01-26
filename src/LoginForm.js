import React, { useState } from 'react';
import './LoginForm.css';

const DEFAULT_INITIAL_DATA = {
  username: "",
  password: ""
};

/**
 * LoginForm component takes in prop initialData and login which is a
 * callback and renders a login form. Has state to keep track of formData.
 *
 * Props:
 * -initialData: value to populate login
 * -login: function on the parent
 *
 * State:
 * -formData
 *
 * RouteList -> LoginForm
 */

function LoginForm({ initialData = DEFAULT_INITIAL_DATA, login, userData }) {
  const [formData, setFormData] = useState(initialData);
  console.log("LoginForm formData:", formData);


  /**
   * handleChange updates formData state based on user input.
   */

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(curr => ({
      ...curr,
      [name]: value,
    }));
  }

  /**
   * handleSubmit invokes the login function passing in formData
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    login(formData);
  }

  return (
    <div className="LoginForm">
      <form className="LoginForm-form" onSubmit={handleSubmit}>
        <label htmlFor="login-username">Username</label>
        <input
          id="login-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {userData.error
          ? <div className="LoginForm-error">
              <p className="LoginForm-error-ms" >Invalid username/password</p>
            </div>
          : ""
        }
        <button className="LoginForm-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;