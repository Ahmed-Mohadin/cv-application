import React, { Component } from 'react';
import GeneralInfo from '../CVForm/GeneralInfo';
import EducationalExp from '../CVForm/EducationalExp';
import PracticalExp from '../CVForm/PracticalExp';

class CVForm extends Component {
    
    render() {
        return (
            <form className='form-container' onSubmit={this.props.onSubmit}>
                <h2>Create CV</h2>
                <div className="general-info">
                    <div className="form-header">
                        <h3>General Information</h3>
                        <button className="btn show-hide">
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                    <GeneralInfo />
                </div>
                <div className="educational-exp">
                    <div className="form-header">
                        <h3>Educational Experience</h3>
                        <button className="btn show-hide">
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                    <EducationalExp />
                </div>
                <div className="practical-exp">
                    <div className="form-header">
                    <h3>Practical Experience</h3>
                        <button className="btn show-hide">
                            <i className="fa-solid fa-angle-down"></i>
                        </button>
                    </div>
                    <PracticalExp />
                </div>
            </form>
        )
    }
}

export default CVForm;