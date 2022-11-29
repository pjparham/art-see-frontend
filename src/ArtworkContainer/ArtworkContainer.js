import React, { useState } from 'react'
import ArtworkCard from '../ArtworkCard'
import FilterButton from '../FilterButton.js/FilterButton'

export default function ArtworkContainer({ artworks }) {
  const [filterName, setFilterName] = useState(false)

 

  const artFiltered = artworks.sort((art1, art2) => {
    if (filterName === false){
      return art2.reviews.length-art1.reviews.length
    }
    else {
      return art1.name.localeCompare(art2.name)
    }
  })
    console.log(filterName)
    const displayArtworks = artFiltered.map((artwork) => {
        return <ArtworkCard 
                    artwork={artwork} key={artwork.id}
                />
    })


  return (
    <>
      <FilterButton filterName={filterName} setFilterName={setFilterName}/>
        {displayArtworks}
    </>
  )
}
