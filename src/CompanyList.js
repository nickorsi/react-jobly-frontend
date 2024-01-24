import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

/**
 * CompanyList component displays search bar and list of company cards
 *
 * Props: None
 *
 * State:
 * - companies: an object like {data, isLoading}
 *    - data: is an array [{handle, name, description, numEmployees, logoUrl}, ...]
 *    - isLoading: a boolean
 * - term: a string
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList () {
  const [companies, setCompanies] = useState({data: null, isLoading: true})
  const [term, setTerm] = useState('');

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies(){
      const companiesResult = await JoblyApi.getAllCompanies(term);
      console.log("companesResult:", companiesResult);
      setCompanies({data: companiesResult, isLoading: false });
    }
    fetchCompanies();
  }, [term]);

  if(companies.isLoading) return <p>Loading...</p>;

  //search function to invoke filter method from API, passed to SearchForm, will
  //set term state to the SearchForm data and update companies state

  /**
   * search function takes in term and updates term state and companies state.
   */

  function searchCompanies(term) {
    setTerm(term);
    setCompanies({data: null, isLoading: true})
  }

  //useEffect with async function to filter data from API , dependent on [term]
  //renders after every term state. Sets companies state.


  return (
    <div className="CompanyList-body">
      <SearchForm term={term} search={searchCompanies}/>
      {companies.data.length === 0
        ? <p>Sorry, no results were found!</p>
        : companies.data.map(
            c => <CompanyCard key={c.handle} companyData={c} />
          )
      }
    </div>
  )
};

export default CompanyList;