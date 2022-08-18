import React, { Component } from 'react';
import FormInput from '../utils/FormInput';

class PracticalExp extends Component {

  render() {
    const { value, onChange } = this.props;

    return (
      <>
        <FormInput
          htmlFor="companyName"
          labelText="Comapny Name"
          inputType="text" 
          onChange={onChange}
          value={value.companyName}
          />

        <FormInput 
          htmlFor="role"
          labelText="Role"
          inputType="text" 
          onChange={onChange}
          value={value.role}
          />

        <FormInput 
          htmlFor="city"
          labelText="City"
          inputType="text" 
          onChange={onChange}
          value={value.city}
          />                

        <div className="date">
          <FormInput 
            htmlFor="fromDate"
            labelText="From Date"
            inputType="text" 
            onChange={onChange}
            value={value.fromDate}
            />                
          
          <FormInput 
            htmlFor="toDate"
            labelText="To Date or Present"
            inputType="text" 
            onChange={onChange}
            value={value.toDate}
            />   

        </div>
                    
        <div className="workDesc">
            <label htmlFor="workDesc">Further Descriptions or Achievements</label>
            <br></br>
            <textarea name="workDesc" id="workDesc" onChange={onChange} value={value.workDesc}
                      cols="30" rows="10" placeholder='Keep it short and simple'>
            </textarea>
        </div>

      </>
    )
  }
}

export default PracticalExp;