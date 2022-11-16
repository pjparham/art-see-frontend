import React, { useState } from 'react'
import Comments from '../Comments'
import EditArtwork from '../EditArtwork'
import { ArtContainer } from './ArtworkDetailsComponents'
import { useParams, NavLink } from 'react-router-dom'

export default function ArtworkDetails({ artworks, setArtworks }) {
  const [edit, setEdit] = useState(false)
  const params = useParams()

  const artwork = artworks.find(art => art.id === parseInt(params.id))

  function handleDeleteArt(deletedArt){
    const updatedPieces = artworks.filter((artwork) => artwork.id !== deletedArt.id)
    setArtworks(updatedPieces)
  }
  
  function onDelete(){
    fetch(`http://localhost:9292/artworks/${artwork.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((deletedArt) => handleDeleteArt(deletedArt))
  }

  // function handleDeletePost(deletedPost){
  //   const updatedPosts = posts.filter((post) => post.id !== deletedPost.id);
  //   setPosts(updatedPosts)
  // }


  if (!artwork) return <h1>Loading...</h1>
  return (
    <>
      <span>Does something look off?  </span><button onClick={()=>setEdit(!edit)}>Edit info</button>
    {edit ? <EditArtwork setArtworks={setArtworks} artworks={artworks} artwork={artwork} edit={edit} setEdit={setEdit}/> :  
      <>
        <ArtContainer>
            <h1>{artwork.name}</h1>
              <img src={artwork.image_url} alt="artwork iamge"></img>
              <p>{artwork.artist} | {artwork.year} | {artwork.medium} | {artwork.inch_height} in. x {artwork.inch_width} in.</p>
              {/* <Link to={`/artworks/${artwork.id}`}>{artwork.reviews.length} {artwork.reviews.length === 1 ? "review" : "reviews"}</Link> */}
        </ArtContainer>
        <Comments comments={artwork.reviews} artwork={artwork} /><br/><br/><br/><br/><br/>
        <p>Not your favorite?  <NavLink to="/"><button onClick={onDelete}>DELETE</button></NavLink></p> 
      </>}
    </>
  )
}
