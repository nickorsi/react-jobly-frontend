import React, { useState } from 'react';
import './RegisterForm.css';

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
 *
 * RouteList -> RegisterForm
 */

function RegisterForm({ initialData = DEFAULT_INITIAL_DATA, register, userData }) {
  const [formData, setFormData] = useState(initialData);
  console.log("RegisterForm formData:", formData);

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
   * handleSubmit invokes the register function passing in formData
   */

  function handleSubmit(evt) {
    evt.preventDefault();
    register(formData);
  }

  return (
    <div className="RegisterForm">
      <form className="RegisterForm-form" onSubmit={handleSubmit}>
        <label htmlFor="register-username">Username</label>
        <input
          id="register-username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="register-fn">First name</label>
        <input
          id="register-fn"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="register-ln">Last name</label>
        <input
          id="register-ln"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {userData.error
          ? <div className="RegisterForm-error">
              {userData.errors.message.map((e, i) => <p key={i} >{e}</p>)}
            </div>
          : ""
        }
        <button className="RegisterForm-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;