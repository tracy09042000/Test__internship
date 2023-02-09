import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Topic from './components/topic/Topic'
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <Navbar />
        <Topic />
      </div>
      <Footer />

    </div>
  );
}

export default App;
