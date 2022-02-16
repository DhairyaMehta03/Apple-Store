import React from 'react';
import './App.css';
import Header from './Header';
import Alert from './Alert';
import Section from './Section';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Alert/>
      <Section title="Iphone 12" className="first-highlight-wrapper"/>
      <Section title="Iphone 12 Pro" className="second-highlight-wrapper"/>
      <Section title="Mac or Ipad" className="third-highlight-wrapper"/>
      <Footer/>
    </div>
  );
}

export default App;
