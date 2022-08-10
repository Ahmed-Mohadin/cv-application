import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

class CVPreview extends Component {
  render() {
    return (
      <div className="preview-container">
        <GeneralInfo />
        <div className="practical-exp">
          <h2>Experience</h2>
          <PracticalExp />
          <PracticalExp />
          <PracticalExp />

        </div>
        <div className="educational-exp">
          <h2>Education</h2>
          <EducationalExp />
          <EducationalExp />
          <EducationalExp />
        </div>
      </div>
    )
  }
}

export default CVPreview;