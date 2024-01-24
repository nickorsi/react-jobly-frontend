import React, { useState } from 'react';
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

  //useEffect with async function fetchAPI data after initial render, [] only
  //render once, sets companies state to ALL companies
  //OR RUN AFTER CHANGE IN TERM????
  //ONLY ONE API METHOD GETS ALL OR FILTERED?
  JoblyApi.getAllCompanies();
  //isLoading, return <p>Loading...</p>

  //search function to invoke filter method from API, passed to SearchForm, will
  //set term state to the SearchForm data and update companies state

  //useEffect with async function to filter data from API , dependent on [term]
  //renders after every term state. Sets companies state.


  return (
    <div>
      <SearchForm />
      <CompanyCard />
    </div>
  )
};

export default CompanyList;