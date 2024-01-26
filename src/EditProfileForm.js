import React, { useState } from 'react';
import './EditProfileForm.css';


/**
 * EditProfileForm component takes in prop initialData and editProfile which
 * is a callback and renders a Edit Profile form. Has state to keep track of
 * formData.
 *
 * Props:
 * -initialData: value to populate EditProfile
 * -editProfile: function on the parent
 *
 * State:
 * -formData
 *
 * RouteList -> EditProfileForm
 */

function EditProfileForm({ initialData, editProfile, userData }) {
  const [formData, setFormData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  console.log("EditProfileForm formData:", formData);

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
   * handleSubmit invokes the editProfile function passing in formData
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await editProfile(formData);
      setSuccessMsg("Successfully editted profile!");
    } catch (err) {
      setErrorMsg(err);
    }
  }
  return (
    <div className="EditProfileForm">
      <form className="EditProfileForm-form" onSubmit={handleSubmit}>
        <label htmlFor="EditProfile-username">Username</label>
        <input
          id="EditProfile-username"
          name="username"
          placeholder={formData.username}
          onChange={handleChange}
          disabled
        />

        <label htmlFor="EditProfile-fn">First name</label>
        <input
          id="EditProfile-fn"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <label htmlFor="EditProfile-ln">Last name</label>
        <input
          id="EditProfile-ln"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <label htmlFor="EditProfile-email">Email</label>
        <input
          id="EditProfile-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

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