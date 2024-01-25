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
//TODO: check for error in catch and craft an error msg

function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, isLoading: true, error: null });
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