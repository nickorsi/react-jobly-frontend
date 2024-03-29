import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';


const DEFAULT_INITIAL_DATA = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  email: ""
};

/**
 * RegisterForm component takes in prop initialData and register which is a
 * callback and renders a registration form. Has state to keep track of
 * formData.
 *
 * Props:
 * -initialData: value to populate register
 * -register: function on the parent
 *
 * State:
 * -formData
 * -errorMsg: an array containing error msgs
 *
 * RouteList -> RegisterForm
 */

function RegisterForm({ initialData = DEFAULT_INITIAL_DATA, register}) {
  const [formData, setFormData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();
  // console.log("RegisterForm formData:", formData);

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
   * handleSubmit invokes the register function passing in formData. On success,
   * navigates user to homepage.
   *
   * If not successful, updates error state.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await register(formData);
      navigate("/");
    } catch (err) {
      setErrorMsg(err);
    }
  }
//TODO: have labels in their own div and inputs to their own div
//TODO: further study: can make a component that handles errors
  return (
    <div className="RegisterForm">
      <h1>Sign Up</h1>
      <div className="RegisterForm-container">
        <form className="RegisterForm-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="register-username">Username</label>
            <input
              id="register-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="register-fn">First name</label>
            <input
              id="register-fn"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="register-ln">Last name</label>
            <input
              id="register-ln"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {errorMsg &&
             <div className="RegisterForm-error">
              {errorMsg.map((e, i) => <p key={i} >{e}</p>)}
            </div>
          }
          <button className="RegisterForm-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;