import React, { Component } from 'react'

class EducationalExpItem extends Component {
  render() {
    return (
        <div className="details">
            <div className="left-side">
                <p>{this.props.schoolName}</p>
                <p>{this.props.city}</p>
                <p>{this.props.year}</p>
            </div>
            <div className="right-side">
                <h4>{this.props.degree}</h4>
                <p>{this.props.eduDesc}</p>
            </div>
        </div>
    )
  }
}

export default EducationalExpItem;