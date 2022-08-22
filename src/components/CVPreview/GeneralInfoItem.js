import React from 'react'

function GeneralInfoItem(props) {
  const {firstName, lastName, role, address, phone, email} = props;

  return (
    <div className="details">
      <div className="left-side">
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h4>{role}</h4>
      </div>
      <div className="right-side">
        <h5>{address}</h5>
        <h5>{phone}</h5>
        <h5>{email}</h5>
      </div>
    </div>
  )
}

export default GeneralInfoItem;