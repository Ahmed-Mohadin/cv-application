import React, { Component } from 'react'

class GeneralInfoItem extends Component {
  render() {
    return (
      <div className="details">
        <div className="left-side">
          <h3>{this.props.firstName}</h3>
          <h3>{this.props.lastName}</h3>
          <h4>{this.props.role}</h4>
        </div>
        <div className="right-side">
          <h5>{this.props.address}</h5>
          <h5>{this.props.phone}</h5>
          <h5>{this.props.email}</h5>
        </div>
      </div>
    )
  }
}

export default GeneralInfoItem;