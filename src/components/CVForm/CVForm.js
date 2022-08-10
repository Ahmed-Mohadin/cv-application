import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

class CVForm extends Component {
    
    render() {
        return (
            <form className='form-container' onSubmit={this.props.onSubmit}>
                <div className="general-info">
                    <h2>Profile</h2>
                    <GeneralInfo />
                </div>
                <div className="practical-exp">
                    <h2>Experience</h2>
                    <PracticalExp />
                </div>
                <div className="educational-exp">
                    <h2>Education</h2>
                    <EducationalExp />
                </div>
            </form>
        )
    }
}

export default CVForm;