import React from 'react';
import Header from './components/Header';
import CVApp from './components/CVApp';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <>
      <Header title={'CV Application'} />
      <CVApp />
      <Footer />
    </>
  )
}

export default App;