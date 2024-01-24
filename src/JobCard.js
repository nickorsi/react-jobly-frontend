import React from 'react';

/**
 * JobCard component takes in prop jobData and renders job info.
 *
 * Props:
 * -jobData: {id, title, salary, equity, companyHandle, companyName}
 *
 * State:
 * -None
 *
 * JobCardList -> JobCard
 */

function JobCard ({ jobData }) {
  console.log("JobCard", "jobData= ", jobData);

  return (
    <div>Job Card!</div>
  )
};

export default JobCard;