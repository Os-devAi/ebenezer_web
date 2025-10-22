import React from 'react';
import HomeHeader from './components/HomHeader';
import Banner from './components/Banner';
import Services from './components/Services';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomeHeader />
      <Banner />
      <Services />
      <Gallery />
      {/* Aquí puedes agregar más secciones como About, Contact, etc. */}
    </div>
  );
}

export default App;