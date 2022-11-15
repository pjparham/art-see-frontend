import React, { useState, useEffect } from 'react';
import ArtworkContainer from './ArtworkContainer';
import ArtworkDetails from './ArtworkDetails';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/artworks")
    .then((r) => r.json())
    .then((artworks) => setArtworks(artworks));
  }, [])




  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ArtworkContainer artworks={artworks} />} />
        <Route path ='/artworks/:id' element={<ArtworkDetails artworks={artworks}/>}/>
      </Routes>
      {/* <ArtworkContainer artworks={artworks} /> */}
    </div>
  );
}

export default App;
