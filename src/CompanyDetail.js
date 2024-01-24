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
 * -companyJobs: an object like: {data, isLoading}
 *    - data: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *    - isLoading: boolean
 *
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */

function CompanyDetail () {
  const [companyJobs, setCompanyJobs] = useState();
  console.log("CompanyDetail", "companyJobs= ", companyJobs);
  const { handle } = useParams();

  //TODO: Is this approach right?
  //TODO: handle bad params here - when we make fetch request, if we get an error, Navigate to homepage
  //Use params to pull out company name
  //Do query to get all jobs
  //Filter jobs array to match company handle, then save in state
  //On re-render, map through state to invoke JobCardList for each job passing
  //in job data

  return (
    <div>Company Details for {handle}
      <JobCardList />
    </div>
  )
};

export default CompanyDetail;