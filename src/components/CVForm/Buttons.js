import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    return (
        <div className="buttons">
            <button className="btn cancel"><i className="fa-solid fa-xmark"></i> Cancel</button>
            <button className='btn save'><i className="fa-solid fa-user-pen"></i> Save</button>
        </div>
    )
  }
}

export default Buttons;