import React, { Component } from 'react'

class GeneralInfo extends Component {
  render() {
    return (
      <div className="general-info">
        <div className="details">
          <div className="left-side">
            <h3>John</h3>
            <h3>Doe</h3>
            <h4>Front End Developer</h4>
          </div>
          <div className="right-side">
            <h5>Earth 1, Street 123</h5>
            <h5>123 45 67 890</h5>
            <h5>john.doe@example.com</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default GeneralInfo;