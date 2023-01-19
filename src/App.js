import React, { useState, useEffect } from 'react';
import AddArtwork from './Components/AddArtwork';
import ArtworkContainer from './Components/ArtworkContainer';
import ArtworkDetails from './Components/ArtworkDetails';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/artworks")
    .then((r) => r.json())
    .then((artworks) => setArtworks(artworks));
  }, [])


console.log(artworks)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<ArtworkContainer artworks={artworks} />} />
        <Route path ='/artworks/:id' element={<ArtworkDetails artworks={artworks} setArtworks={setArtworks}/>}/>
        <Route path='/new-piece' element={<AddArtwork artworks={artworks} setArtworks={setArtworks}/>}/>
      </Routes>
      {/* <ArtworkContainer artworks={artworks} /> */}
    </div>
  );
}

export default App;
