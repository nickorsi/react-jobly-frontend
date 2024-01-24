import React from 'react';

/**
 * CompanyCard component takes in prop copmanyData and renders copmany info.
 *
 * Props:
 * -companyData: {handle, name, description, numEmployees, logoUrl}
 *
 * State:
 * -None
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard ({ companyData }) {
  console.log("CompanyCard", "copmanyData= ", companyData);

  return (
    <div>Company Card!</div>
  )
};

export default CompanyCard;