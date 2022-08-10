import React, { Component } from 'react';
class GeneralInfo extends Component {
    
    render() {
        return (
            <>
                <div className="details">
                    <div className="left-side">
                        <div className="first-name">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" name="first-name" id="first-name" placeholder='First Name'/>
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" name="last-name" id="last-name" placeholder='Last Name '/>
                        </div>
                        <div className="current-role">
                            <label htmlFor="current-role">Current Role</label>
                            <input type="text" name="current-role" id="current-role" placeholder='Current Role' />
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="address">
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" placeholder='Address' />
                        </div>
                        <div className="phone">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone" placeholder='Phone '/>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" placeholder='Email'/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn cancel"><i className="fa-solid fa-xmark"></i> Cancel</button>
                    <button className='btn save'><i className="fa-solid fa-user-pen"></i> Save</button>
                </div>
            </>
        )
    }
}


export default GeneralInfo;