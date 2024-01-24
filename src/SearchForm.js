import React, { useState } from 'react';


/**
 * SearchForm component takes in prop search which is a callback and renders a
 * searchbar. Has state to keep track of form data.
 *
 * Props:
 * -search: callback function
 *
 * State:
 * -formData
 *
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm ({ search }) {
  const [formData, setFormData] = useState("");
  console.log("SearchForm", "search= ", search, "formData=", formData);

  // How to handle the value in search bar after search?
  // Do we have to save it as state in the parent?
  // Dont rely on parent passing in state, just have initial render default to ""
  return (
    <div>
      Search Bar!
    </div>
  )
};

export default SearchForm;