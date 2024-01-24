import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
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

function CompanyDetail () {
  const [company, setCompany] = useState({data:null, isLoading: true});
  const { handle } = useParams();

  console.log("CompanyDetail", "companyJobs= ", company, "handle= ", handle);

  //TODO: Is this approach right?
  //TODO: handle bad params here - when we make fetch request, if we get an error, Navigate to homepage

  useEffect(function fetchCompanyWhenMounted() {
    async function fetchCompany() {
      const companyResult = await JoblyApi.getCompany(handle);
      console.log("companyResult:", companyResult);
      setCompany({ data: companyResult, isLoading: false });
    }
    fetchCompany();
  }, []);

  if (company.isLoading) return <p>Loading...</p>;

  return (
    <div className="CompanyDetail">
      {company.data.status === 404
        ? <p>{company.data.message}</p>
        : <div>
            <h1>{company.data.name}</h1>
            <p>{company.data.description}</p>
            <JobCardList jobsData={company.data.jobs}/>
          </div>
      }
    </div>
  )
};

export default CompanyDetail;