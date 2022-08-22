import React from 'react'

function PracticalExpItem(props) {
  const {companyName, city, year, role, workDesc} = props;

  return (
      <div className="details">
          <div className="left-side">
              <p>{companyName}</p>
              <p>{city}</p>
              <p>{year}</p>
          </div>
          <div className="right-side">
              <h4>{role}</h4>
              <p>{workDesc}</p>
          </div>
      </div>
  )
}

export default PracticalExpItem;