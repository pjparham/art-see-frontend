import React, { useState } from 'react'
import { Form } from './AddArtworkComponents'


export default function AddArtwork({ artworks, setArtworks }) {

  const [newPiece, setNewPiece] = useState({
    "name": "",
    "artist": "",
    "medium": "",
    "inchHeight": "",
    "inchWidth": "",
    "year": "",
    "imageUrl": ""
})

function handleChange(e){
    setNewPiece({
        ...newPiece,
        [e.target.name]: e.target.value,
    })
}

function handleAddArtwork(newArtwork){
  setArtworks([...artworks, newArtwork])
}

function handleSubmit(e){
  e.preventDefault()
  fetch(`http://localhost:9292/artworks`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newPiece)
  })
  .then((r) => r.json())
  .then((newArtwork) => handleAddArtwork(newArtwork))
  setNewPiece({
    "name": "",
    "artist": "",
    "medium": "",
    "inchHeight": "",
    "inchWidth": "",
    "year": "",
    "imageUrl": ""
  })
  console.log('submitted')
}

  return (
    <>
    <h1>Don't see your favorite work of art? Add it to our collection here!</h1>
    <Form onSubmit={handleSubmit}>
      <label>Title: </label><br/>
      <input type="text" id="name" name="name" value={newPiece.name} onChange={handleChange}/><br/>
      <label>Artist: </label><br/>
      <input type="text" id="artist" name="artist" value={newPiece.artist} onChange={handleChange}/><br/>
      <label>Medium: </label><br/>
      <input type="text" id="medium" name="medium" value={newPiece.medium} onChange={handleChange}/><br/>
      <label>Height in inches: </label><br/>
      <input type="text" id="inchHeight" name="inchHeight" value={newPiece.inchHeight} onChange={handleChange}/><br/>
      <label>Width in inches: </label><br/>
      <input type="text" id="inchWidth" name="inchWidth" value={newPiece.inchWidth} onChange={handleChange}/><br/>
      <label>Year: </label><br/>
      <input type="text" id="year" name="year" value={newPiece.year} onChange={handleChange}/><br/>
      <label>Image URL: </label><br/>
      <input type="text" id="imageUrl" name="imageUrl" value={newPiece.imageUrl} onChange={handleChange}/><br/><br/>
      <input type="submit" value="Submit"/>
    </Form>
    </>
  )
}

{/* <form onSubmit={handleSubmit}>
<label>Your name: </label>
<input type="text" id="author" name="author" value={newComment.author} onChange={handleChange}/><br/><br/>
    <CommentForm value={newComment.body} onChange={handleChange} className="body-input" type="textarea" id="body" name="body"></CommentForm><br></br>
    <input type="submit" value="Submit"/>
</form> */}