import React from 'react'
import { PostContainer, UserName } from "./CommentElements" 

export default function Comment({comment}) {
  return (
    <PostContainer>
        <UserName>By {comment.author}</UserName>
        <p>{comment.body}</p>
    </PostContainer>
  )
}
