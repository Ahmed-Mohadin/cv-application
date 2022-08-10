import React, { Component } from 'react'

class PracticalExp extends Component {
  render() {
    return (
      <>

        <div className="company-name">
          <label htmlFor="company-name">Compnay Name</label>
          <input type="text" name="company-name" id="company-name" placeholder='Company Name'/>
        </div>

        <div className="role">
            <label htmlFor="role">Role</label>
            <input type="text" name="role" id="role"placeholder='Role' />
        </div>
                
        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder='City'/>
        </div>

        <div className="date">
          <div className="from-date">
            <label htmlFor="from-date">From</label>
            <input type="date" name="from-date" id="from-date" />
          </div>

          <div className="to-date">
            <label htmlFor="to-date">To</label>
            <input type="date" name="to-date" id="to-date" />
          </div>
        </div>
          
        <div className="work-desc">
            <label htmlFor="work-desc">Further Descriptions or Achievements</label>
            <br></br>
            <textarea name="work-desc" id="work-desc"  
                  cols="30" rows="10" placeholder='Keep it short and simple'>
            </textarea>
        </div>
        
        <div className="buttons">
            <button className="btn cancel"><i className="fa-solid fa-xmark"></i> Cancel</button>
            <button className='btn save'><i className="fa-solid fa-user-pen"></i> Save</button>
        </div>
        
    </>
    )
  }
}

export default PracticalExp;