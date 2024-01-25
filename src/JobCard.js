import React from 'react';
import './JobCard.css'

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

function JobCard({ jobData }) {
  // console.log("JobCard", "jobData= ", jobData);
  //TODO: destructure jobData
  return (
    <div className="JobCard">
      <h4><b>{jobData.title}</b></h4>
      <h5>{jobData.companyName}</h5>
      <p>Salary: {jobData.salary}</p>
      <p>Equity: {jobData.equity}</p>
    </div>
  );
};

export default JobCard;