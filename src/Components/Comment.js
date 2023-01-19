import React from 'react'

export default function Comment({comment}) {
  return (
    <div className='comment-container'>
        <p className='username'>By {comment.author}</p>
        <p>{comment.body}</p>
    </div>
  )
}
