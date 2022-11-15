import React from 'react'
import Comments from '../Comments'
import { ArtContainer } from './ArtworkDetailsComponents'
import { useParams } from 'react-router-dom'

export default function ArtworkDetails({ artworks }) {
    const params = useParams()

    const artwork = artworks.find(art => art.id === parseInt(params.id))
    // const { artist, image_url, inch_height, inch_width, medium, name, year } = artwork;
    console.log(artwork)
  if (!artwork) return <h1>Loading...</h1>
  return (
    <>
      <ArtContainer>
          <h1>{artwork.name}</h1>
            <img src={artwork.image_url} alt="artwork iamge"></img>
            <p>{artwork.artist} | {artwork.year} | {artwork.medium} | {artwork.inch_height} in. x {artwork.inch_width} in.</p>
            {/* <Link to={`/artworks/${artwork.id}`}>{artwork.reviews.length} {artwork.reviews.length === 1 ? "review" : "reviews"}</Link> */}
      </ArtContainer>
      <Comments comments={artwork.reviews} artwork={artwork} />
    </>
  )
}
