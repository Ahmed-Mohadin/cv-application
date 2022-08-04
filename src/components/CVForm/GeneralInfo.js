import React, { Component } from 'react';
class GeneralInfo extends Component {
    
    render() {
        return (
           <>
            <div className="details">
                <div className="photo">
                    <label htmlFor="photo">Photo</label>
                    <input type="file" name="photo" id="photo" />
                </div>
                <div className="name">
                    <label htmlFor="full-name">Full name</label>
                    <input type="text" name="full-name" id="full-name" />
                </div>
                <div className="job-title">
                    <label htmlFor="job-title">Job title</label>
                    <input type="text" name="job-title" id="job-title" />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" />
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" />
                </div>
                <div className="address">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" />
                </div>
            </div>
            <div className="buttons">
                <button className='btn cancel'><i className="fa-solid fa-xmark"></i> Cancel</button>
                <button className="btn save"><i className="fa-solid fa-check"></i>Save</button>
            </div>
           </>
        )
    }
}


export default GeneralInfo;