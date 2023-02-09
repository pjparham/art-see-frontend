import React from 'react'

export default function FilterButton({ setFilterName}) {
    function handleNameClick(){
        setFilterName(true)
    }

    function handleReviewsClick(){
        setFilterName(false)
    }


  return (
    <>
        <span><b>Sort:{"  "}</b></span>
        <button className='filter-button' onClick={handleNameClick}>Name</button>
        <span>{"   "}</span>
        <button className='filter-button' onClick={handleReviewsClick}>Reviews</button>
    </>
  )
}
