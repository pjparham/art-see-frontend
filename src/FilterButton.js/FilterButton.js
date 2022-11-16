import React from 'react'
import { StyledButton } from './FilterButtonComponents'

export default function FilterButton({ setFilterName}) {
    function handleNameClick(){
        setFilterName(true)
    }

    function handleReviewsClick(){
        setFilterName(false)
    }


  return (
    <>
        <span><b>Filter By:{"  "}</b></span>
        <StyledButton onClick={handleNameClick}>Name</StyledButton>
        <span>{"   "}</span>
        <StyledButton onClick={handleReviewsClick}>Reviews</StyledButton>
    </>
  )
}
