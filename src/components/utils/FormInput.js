import React, { Component } from 'react'

class FormInput extends Component {
  render() {
    const {htmlFor, labelText, inputType, onChange, value} = this.props;
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
}

export default FormInput;