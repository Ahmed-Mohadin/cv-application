import React, { Component } from 'react';
import Buttons from './Buttons';
import FormInput from './FormInput';

class GeneralInfoItem extends Component {
    
    render() {
        return (
            <>
                <div className="details">
                    <div className="left-side">
                        <FormInput 
                            htmlFor="first-name"
                            labelText="First Name"
                            inputType="text" />

                        <FormInput 
                            htmlFor="last-name"
                            labelText="Last Name"
                            inputType="text" />

                        <FormInput 
                            htmlFor="role"
                            labelText="Role"
                            inputType="text" />

                    </div>
                    
                    <div className="right-side">
                        <FormInput 
                            htmlFor="address"
                            labelText="Address"
                            inputType="text" />

                        <FormInput 
                            htmlFor="phone"
                            labelText="Phone"
                            inputType="text" />

                        <FormInput 
                            htmlFor="email"
                            labelText="Email"
                            inputType="text" />
                                                
                    </div>
                
                </div>
                <Buttons />
            </>
        )
    }
}


export default GeneralInfoItem;