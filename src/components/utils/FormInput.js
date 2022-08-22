import React from 'react';

function FormInput(props) {
  const {htmlFor, labelText, inputType, onChange, value} = props;  

  return (
      <div className={htmlFor}>
          <label htmlFor={htmlFor}>{labelText}</label>
          <input type={inputType} 
                name={htmlFor} 
                id={htmlFor} 
                placeholder={labelText} 
                onChange={onChange}
                value={value}
                />
      </div>
  )
}

export default FormInput;