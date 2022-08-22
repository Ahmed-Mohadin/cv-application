import React from 'react';
import FormInput from '../utils/FormInput';

function EducationalExp({ value, onChange }) {
  return (
      <>
        <FormInput
          htmlFor="schoolName"
          labelText="School Name"
          inputType="text" 
          onChange={onChange}
          value={value.schoolName}
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

        <FormInput 
          htmlFor="degree"
          labelText="Degree"
          inputType="text" 
          onChange={onChange}
          value={value.degree}
          />

        <div className="eduDesc">
          <label htmlFor="eduDesc">Further Descriptions or Achievements</label>
          <textarea name="eduDesc" id="eduDesc" onChange={onChange} value={value.eduDesc} 
                  cols="30" rows="10" placeholder='Keep it short and simple'>
          </textarea>
        </div>

    </>
  )
}

export default EducationalExp;