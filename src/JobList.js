import React, { useState } from 'react';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

/**
 * JobList renders a search bar and a list of job cards
 *
 * Props: None
 *
 * State:
 * - jobs: an object: {data, isLoading}
 *    - data: [{id, title, salary, equity, companyHandle, companyName}, ...]
 *    - isLoading: boolean
 * - term: string
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList () {
  console.log("JobList");
  const [jobs, setJobs] = useState({data: null, isLoading: true})
  const  [term, setTerm]= useState('')


  return (
    <div>
      <SearchForm />
      <JobCardList />
    </div>
  )
};

export default JobList;