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
  const {title, companyName, salary, equity} = jobData
  return (
    <div className="JobCard">
      <h4><b>{title}</b></h4>
      <h5>{companyName}</h5>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
    </div>
  );
};

export default JobCard;