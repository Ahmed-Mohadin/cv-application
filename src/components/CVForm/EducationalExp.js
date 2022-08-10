import React, { Component } from 'react'

class EducationalExp extends Component {
  render() {
    return (
      <>

        <div className="school-name">
          <label htmlFor="school-name">University or School Name</label>
          <input type="text" name="school-name" id="school-name" placeholder='School Name'/>
        </div>

        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder='City'/>
        </div>

        <div className="from-date">
          <label htmlFor="from-date">From</label>
          <input type="date" name="from-date" id="from-date" />
        </div>

        <div className="date">
          <div className="to-date">
            <label htmlFor="to-date">To</label>
            <input type="date" name="to-date" id="to-date" />
          </div>

          <div className="degree">
            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" id="degree" placeholder='Degree'/>
          </div>
        </div>

        <div className="education-desc">
          <label htmlFor="education-desc">Further Descriptions or Achievements</label>
          <textarea name="education-desc" id="education-desc" 
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

export default EducationalExp;