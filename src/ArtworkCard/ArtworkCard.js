import React from 'react';
import { ArtContainer } from './ArtworkCardElements'
import { Link } from 'react-router-dom'

function ArtworkCard({ artwork }){
    const { artist, image_url, inch_height, inch_width, medium, name, year } = artwork;




    return (
        <ArtContainer>
            <h1>{name}</h1>
            <img src={image_url} alt="artwork iamge"></img>
            <p>{artist} | {year} | {medium} | {inch_height} in. x {inch_width} in.</p>
            <Link to={`/artworks/${artwork.id}`}>{artwork.reviews.length} {artwork.reviews.length === 1 ? "review" : "reviews"}</Link>
        </ArtContainer>
    )
}

export default ArtworkCard