import React from 'react';
import { Link } from 'react-router-dom'

/**
 * CompanyCard component takes in prop companyData and renders company info.
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
    <div>
    <Link to="/companies/test">Company Card Test!</Link>
    </div>
  )
};

export default CompanyCard;