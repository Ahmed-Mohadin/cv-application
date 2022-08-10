import React, { Component } from 'react';
import FormInput from './FormInput';
import Buttons from './Buttons';

class EducationalExp extends Component {
  render() {
    return (
      <>
        <FormInput
          htmlFor="school-name"
          labelText="School Name"
          inputType="text" />

        <FormInput 
          htmlFor="city"
          labelText="City"
          inputType="text" />                

        <div className="date">
          <FormInput 
            htmlFor="from-date"
            labelText="From Date"
            inputType="date" />                
          
          <FormInput 
            htmlFor="to-date"
            labelText="To Date"
            inputType="date" />                
        </div>

        <FormInput 
          htmlFor="Degree"
          labelText="Degree"
          inputType="text" />

        <div className="education-desc">
          <label htmlFor="education-desc">Further Descriptions or Achievements</label>
          <textarea name="education-desc" id="education-desc" 
                  cols="30" rows="10" placeholder='Keep it short and simple'>
          </textarea>
        </div>

        <Buttons />
    </>
    )
  }
}

export default EducationalExp;