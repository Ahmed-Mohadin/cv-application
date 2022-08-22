import React from 'react'

function EducationalExpItem(props) {
  const {schoolName, city, year, degree, eduDesc} = props;

  return (
      <div className="details">
          <div className="left-side">
              <p>{schoolName}</p>
              <p>{city}</p>
              <p>{year}</p>
          </div>
          <div className="right-side">
              <h4>{degree}</h4>
              <p>{eduDesc}</p>
          </div>
      </div>
  )
}

export default EducationalExpItem;