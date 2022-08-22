import React from 'react';
import FormInput from '../utils/FormInput';

function GeneralInfoItem({ value, onChange}) {
    return (
        <>
            <div className="details">
                <div className="left-side">
                    <FormInput 
                        htmlFor="firstName"
                        labelText="First Name"
                        inputType="text" 
                        onChange={onChange}
                        value={value.firstName}
                        />

                    <FormInput 
                        htmlFor="lastName"
                        labelText="Last Name"
                        inputType="text" 
                        onChange={onChange}
                        value={value.lastName}
                        />

                    <FormInput 
                        htmlFor="role"
                        labelText="Role"
                        inputType="text" 
                        onChange={onChange}
                        value={value.role}
                        />

                </div>
                
                <div className="right-side">
                    <FormInput 
                        htmlFor="address"
                        labelText="Address"
                        inputType="text" 
                        onChange={onChange}
                        value={value.address}
                        />

                    <FormInput 
                        htmlFor="phone"
                        labelText="Phone"
                        inputType="text" 
                        onChange={onChange}
                        value={value.phone}
                        />

                    <FormInput 
                        htmlFor="email"
                        labelText="Email"
                        inputType="text" 
                        onChange={onChange}
                        value={value.email}
                        />
                                            
                </div>
            
            </div>
        </>
    )

}

export default GeneralInfoItem;