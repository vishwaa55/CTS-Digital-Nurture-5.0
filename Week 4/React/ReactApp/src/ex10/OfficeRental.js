import React from 'react';
import officeImage from './office.png';
import './office.css';

function OfficeRental() {
  const element = "Office Space";
  const jsxatt = <img src={officeImage} width="35%" height="35%" alt="Office Space" />;
  const ItemName = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  // Setup colors array based on the lab logic for the core item
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  // A list of office objects to loop through and display more data
  const officesList = [
    { Name: "DBS Office Hub", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork Prestige Center", Rent: 75000, Address: "Bangalore" },
    { Name: "Regus Gateway Tower", Rent: 45000, Address: "Hyderabad" },
    { Name: "Smartworks Capital Plaza", Rent: 85000, Address: "Mumbai" },
    { Name: "Indiqube Alpha Workspace", Rent: 58000, Address: "Pune" }
  ];

  return (
    <div className="office-rental-container">
      {/* Title element */}
      <h1>{element} , at Affordable Range</h1>

      {/* Image element using jsxatt attribute */}
      <div className="office-image-container">
        {jsxatt}
      </div>

      {/* Single core office space details */}
      <div className="core-office-details">
        <h2>Primary Featured Office</h2>
        <h3>Name: {ItemName.Name}</h3>
        {/* Render rent with className from colors array to verify conditional class styling */}
        <h3 className={colors[0]}>Rent: Rs. {ItemName.Rent}</h3>
        <h3>Address: {ItemName.Address}</h3>
      </div>

      {/* Loop through list of office spaces to display more data */}
      <h2 className="office-list-title">All Available Office Spaces</h2>
      <div className="office-grid">
        {officesList.map((office, index) => {
          // Dynamic class name for each list item
          const itemClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';

          return (
            <div key={index} className="office-card">
              <h3>{office.Name}</h3>
              <p>
                <strong>Rent: </strong>
                {/* Displaying Rent colored using inline style and conditional classes */}
                <span className={itemClass} style={{ fontSize: '1.05rem' }}>
                  Rs. {office.Rent}
                </span>
              </p>
              <p><strong>Address: </strong>{office.Address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OfficeRental;
