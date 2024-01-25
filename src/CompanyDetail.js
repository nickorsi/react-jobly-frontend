import React, { useState, useEffect } from 'react';
import { useParams, Navigate} from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';


/**
 * CompanyDetail component takes no props but has state tracking jobs related
 * to company.
 *
 * Props:
 * -None
 *
 * State:
 * -company: an object like: {data, isLoading}
 *    - data: { handle, name, description, numEmployees, logoUrl, jobs }
 *     where jobs is [{ id, title, salary, equity }, ...]
 *    - isLoading: boolean
 *
 *
 * RoutesList -> CompanyDetail -> JobCardList
 *
 */
//FURTHER STUDY: As alternative to how error was handled below, If data can
//have errors associated with it, can save in state and handle it here
//{data, isLoading, error: "" or null}. Can then cract the error message in the
//error property of the state.

function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, isLoading: true});
  const { handle } = useParams();

  console.log("Company Detail", company, "handle:", handle);

  useEffect(function fetchCompanyWhenMounted() {
    console.log("fetchCompanyWhenMounted is running")
    async function fetchCompany() {
      try {
        const companyResult = await JoblyApi.getCompany(handle);
        setCompany({ data: companyResult, isLoading: false });
      } catch(err){
        setCompany({ data: null , isLoading: false});
      }
    }
    fetchCompany();
  }, [handle]);
  //POTENTIAL SUBTLE BUG!! Whenever useEffect relies on a variable for the
  //answer should include this in the dependecy to avoid potential bugs where
  //variable is changed indirectly but useEffect doesn't run and re-render in
  //reponse.

  if (company.isLoading) return <p>Loading...</p>;

  return (
    <div className="CompanyDetail">
      {company.data === null
        ? <p>Sorry, company not found: {handle} </p>
        : <div>
          <h1>({handle}) {company.data.name}</h1>
          <p>{company.data.description}</p>
          <JobCardList jobsData={company.data.jobs} />
        </div>
      }
    </div>
  );
};

export default CompanyDetail;