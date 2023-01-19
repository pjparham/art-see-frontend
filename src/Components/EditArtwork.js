import React, { useState } from 'react'

export default function EditArtwork({ artwork, artworks, setArtworks, edit, setEdit }) {
    const [updatedArtwork, setUpdatedArtwork] = useState({
        "name": artwork.name,
        "artist": artwork.artist,
        "medium": artwork.medium,
        "inchHeight": artwork.inch_height,
        "inchWidth": artwork.inch_width,
        "year": artwork.year,
        "imageUrl": artwork.image_url,
        "id": artwork.id
    })
    
    
    
    
    function handleChange(e){
        setUpdatedArtwork({
            ...updatedArtwork,
            [e.target.name]: e.target.value,
        })
    }

    function handleUpdateArtwork(updatedArtwork){
        const updatedArtworks = artworks.map((artwork) => {
            if (artwork.id === updatedArtwork.id){
                return updatedArtwork
            }
            else {return artwork}
        })
        setArtworks(updatedArtworks)
    }
    

    function handleSubmit(e){
      e.preventDefault()
      fetch(`http://localhost:9292/artworks/${artwork.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedArtwork)
      })
      .then((r) => r.json())
      .then((updatedArtwork) => handleUpdateArtwork(updatedArtwork))
      console.log('submitted')
      setEdit(!edit)
    }

console.log(artwork.id)
  return (
    <>
    <h1>Does something seem off? Please correct the info here!</h1>
    <form className='edit-artwork-form' onSubmit={handleSubmit}>
      <label>Title: </label><br/>
      <input type="text" id="name" name="name" value={updatedArtwork.name} onChange={handleChange}/><br/>
      <label>Artist: </label><br/>
      <input type="text" id="artist" name="artist" value={updatedArtwork.artist} onChange={handleChange}/><br/>
      <label>Medium: </label><br/>
      <input type="text" id="medium" name="medium" value={updatedArtwork.medium} onChange={handleChange}/><br/>
      <label>Height: </label><br/>
      <input type="text" id="inchHeight" name="inchHeight" value={updatedArtwork.inchHeight} onChange={handleChange}/><br/>
      <label>Width: </label><br/>
      <input type="text" id="inchWidth" name="inchWidth" value={updatedArtwork.inchWidth} onChange={handleChange}/><br/>
      <label>Year: </label><br/>
      <input type="text" id="year" name="year" value={updatedArtwork.year} onChange={handleChange}/><br/>
      <label>Image URL: </label><br/>
      <input type="text" id="imageUrl" name="imageUrl" value={updatedArtwork.imageUrl} onChange={handleChange}/><br/><br/>
      <input type="submit" value="Submit"/>
    </form>
    </>
  )
}
