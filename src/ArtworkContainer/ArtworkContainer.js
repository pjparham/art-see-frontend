import React from 'react'
import ArtworkCard from '../ArtworkCard'

export default function ArtworkContainer({ artworks }) {
    
    const displayArtworks = artworks.map((artwork) => {
        return <ArtworkCard 
                    artwork={artwork}
                />
    })


  return (
    <>
        {displayArtworks}
    </>
  )
}
