import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <header>
            <h1 className="title">{this.props.title}</h1>
        </header>   
    )
  }
}

export default Header;