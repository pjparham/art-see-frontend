import React from 'react';
import { Link } from 'react-router-dom'

function ArtworkCard({ artwork }){
    const { artist, image_url, inch_height, inch_width, medium, name, year } = artwork;

    let length = "0"
    if (artwork.reviews) {
        length = artwork.reviews.length
    }


    return (
        <div className='art-card'>
            <h1><i>{name}</i></h1>
            <img src={image_url} alt="artwork iamge"></img>
            <p>{artist} | {year} | {medium} | {inch_height} in. x {inch_width} in.</p>
            <Link to={`/artworks/${artwork.id}`}>{length} {length === 1 ? "review" : "reviews"}</Link>
        </div>
    )
}

export default ArtworkCard