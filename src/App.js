import React, { Component } from 'react'
import CVApp from './components/CVApp';
import Footer from './components/Footer';
import Header from './components/Header';
import './styles/style.css';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <CVApp />
        <Footer />
      </>
    )
  }
}

export default App;