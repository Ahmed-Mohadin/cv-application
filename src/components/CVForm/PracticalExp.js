import React, { Component } from 'react';
import FormInput from './FormInput';
import Buttons from './Buttons';

class PracticalExp extends Component {
  render() {
    return (
      <>
        <FormInput
          htmlFor="company-name"
          labelText="Comapny Name"
          inputType="text" />

        <FormInput 
          htmlFor="role"
          labelText="Role"
          inputType="text" />

        <FormInput 
          htmlFor="city"
          labelText="City"
          inputType="text" />                

        <div className="date">
          <FormInput 
            htmlFor="from-date"
            labelText="From Date"
            inputType="text" />                
          
          <FormInput 
            htmlFor="to-date"
            labelText="To Date"
            inputType="date" />                
        </div>
                    
        <div className="work-desc">
            <label htmlFor="work-desc">Further Descriptions or Achievements</label>
            <br></br>
            <textarea name="work-desc" id="work-desc"  
                  cols="30" rows="10" placeholder='Keep it short and simple'>
            </textarea>
        </div>

        <Buttons />        
    </>
    )
  }
}

export default PracticalExp;