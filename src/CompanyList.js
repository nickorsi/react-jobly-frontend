import React, { useState } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

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

  //async function fetchAPI data after initial render, []
  //TODO: how often to make that request? should the dependency be an [],
  // or based on companies data array

  return (
    <div>
      <SearchForm />
      <CompanyCard />
    </div>
  )
};

export default CompanyList;