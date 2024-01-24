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
    <div className="CompanyCard">
      <Link to="/companies/test">
        <h5 className="CompanyCard-name">{companyData.name}</h5>
        <p className="CompanyCard-description">{companyData.description}</p>
        {companyData.logoUrl === null
          ? ""
          : <img
            className="CompanyCard-logo"
            src={companyData.logoUrl}
            alt="company logo"></img>
        }
      </Link>
    </div>
  )
};

export default CompanyCard;