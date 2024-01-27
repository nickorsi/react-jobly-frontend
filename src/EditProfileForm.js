import React, { useState } from 'react';
import './EditProfileForm.css';


/**
 * EditProfileForm component takes in prop user and editProfile which
 * is a callback and renders a Edit Profile form. Has state to keep track of
 * formData, errorMsg, and successMsg
 *
 * Props:
 * -user: data about user
 * -editProfile: function on the parent
 *
 * State:
 * -formData: an object like {username, firstName, lastName, email}
 * -errorMsg: an array containing error msgs
 * -successMsg: a string
 *
 * RouteList -> EditProfileForm
 */

function EditProfileForm({ user, editProfile}) {
  const {username, firstName, lastName, email} = user;
  const [formData, setFormData] = useState({username, firstName, lastName, email});
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  // console.log("EditProfileForm formData:", formData);

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
   * handleSubmit invokes the editProfile function passing in formData.
   * formData like {username, firstName, lastName, email}
   *
   * Sets successMsg state on successful submission or sets errorMsg state
   * on failure
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editProfile(formData);
      setSuccessMsg("Successfully editted profile!");
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg(err);
      setSuccessMsg(null);
    }
  }

  return (
    <div className="EditProfileForm">
      <form className="EditProfileForm-form" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="EditProfile-username">Username</label>
        <input
          id="EditProfile-username"
          name="username"
          placeholder={formData.username}
          onChange={handleChange}
          disabled
        />
        </div>
        <div>
        <label htmlFor="EditProfile-fn">First name</label>
        <input
          id="EditProfile-fn"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="EditProfile-ln">Last name</label>
        <input
          id="EditProfile-ln"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="EditProfile-email">Email</label>
        <input
          id="EditProfile-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </div>

        {successMsg &&
        <div className="EditProfileForm-success">
          <p>{successMsg}</p>
        </div>
        }

        {errorMsg &&
          <div className="EditProfileForm-error">
            {errorMsg.map((e, i) => <p key={i} >{e}</p>)}
          </div>
        }
        <button className="EditProfileForm-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfileForm;