import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';
import JoblyApi from './api';

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
  const [jobs, setJobs] = useState({data: null, isLoading: true})
  const  [term, setTerm]= useState('');
  console.log("jobs:", jobs, "term:", term);

  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const jobsResult = await JoblyApi.getAllJobs(term);
      console.log("jobsResult:", jobsResult);
      setJobs({ data: jobsResult, isLoading: false });
    }
    fetchJobs();
  }, [term]);

  /**
   * search function takes in term and updates term state
   * and jobs state
   */
  function searchJobs(term){
    setTerm(term);
    setJobs({ data: null, isLoading: true });
  }

  if(jobs.isLoading) return <p>Loading... </p>;

  return (
    <div>
      <SearchForm search={searchJobs} term={term}/>
      {jobs.data.length === 0
      ? <p>Sorry, no results were found!</p>
      : <JobCardList jobsData={jobs}/>
      }
    </div>
  );
};

export default JobList;