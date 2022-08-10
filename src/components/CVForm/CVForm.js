import React, { Component } from 'react';
import GeneralInfoItem from './GeneralInfoItem';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';

class CVForm extends Component {
    
    render() {
        return (
            <form className='form-container' onSubmit={this.props.onSubmit}>
                <div className="general-info">
                    <h2>Profile <div className='underline'></div></h2>
                    <GeneralInfoItem />
                </div>
                <div className="practical-exp">
                    <h2>Experience <div className='underline'></div></h2>
                    <PracticalExp />
                </div>
                <div className="educational-exp">
                    <h2>Education <div className='underline'></div></h2>
                    <EducationalExp />
                </div>
            </form>
        )
    }
}

export default CVForm;