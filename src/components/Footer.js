import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
        <footer>
            <p>
                Built by
                <a className="footer-link" href="https://github.com/Ahmed-Mohadin/" target="_blank" rel="noreferrer">Ahmed Mohadin</a>
                |
                <a className="footer-link" href="https://github.com/Ahmed-Mohadin/cv-application" target="_blank" rel="noreferrer">Source</a>
            </p>
        </footer>
    )
  }
}

export default Footer;