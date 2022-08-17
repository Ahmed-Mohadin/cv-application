import React, { Component } from 'react'

class PracticalExp extends Component {
  render() {
    return (
        <div className="details">
            <div className="left-side">
                <p>{this.props.companyName}</p>
                <p>{this.props.city}</p>
                <p>{this.props.year}</p>
            </div>
            <div className="right-side">
                <h4>{this.props.role}</h4>
                <p>{this.props.workDesc}</p>
            </div>
        </div>
    )
  }
}

export default PracticalExp;