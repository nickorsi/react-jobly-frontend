import React from 'react';
import CompanyCard from './CompanyCard';

/**
 * CopmanyCardList component takes in prop copmaniesData and renders CopmanyCard
 * component for each companiesData element.
 *
 * Props:
 * -companiesData: [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 * State:
 * -None
 *
 * RoutesList -> CompanyList -> CompanyCard
 */

function CompanyList ({ companiesData }) {
  console.log("CompanyList", "companiesData= ", companiesData);

  return (
    <div>
      <CompanyCard />
    </div>
  )
};

export default CompanyList;