import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import JobCardList from './JobCardList';

/**
 * CompanyDetail component takes no props but has state tracking jobs related
 * to company.
 *
 * Props:
 * -None
 *
 * State:
 * -companyJobs: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */

function CompanyDetail () {
  const [companyJobs, setCompanyJobs] = useState();
  console.log("CompanyDetail", "companyJobs= ", companyJobs);
  //TODO: Is this approach right?
  //Use params to pull out company name
  //Do query to get all jobs
  //Filter jobs array to match company handle, then save in state
  //On re-render, map through state to invoke JobCardList for each job passing
  //in job data

  return (
    <div>Company Details
      <JobCardList />
    </div>
  )
};

export default JobCard;