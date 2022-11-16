import React, { useState } from 'react'
import Comment from '../Comment/Comment'
import { CommentForm } from "./CommentsElements"

export default function Comments({comments, artwork}) {
    const [newComment, setNewComment] = useState({
        "author": "",
        "body": "",
        "id": `${artwork.id}` 
    })
    const [allComments, setAllComments] = useState(comments)

    function handleChange(e){
        setNewComment({
            ...newComment,
            [e.target.name]: e.target.value,
        })
    }

 
    const displayComments = allComments.map((comment) => {
        return <Comment key={comment.id} comment={comment}/>
    })

    function handleAddComment(newComment){
        setAllComments([...allComments, newComment])
    }


    function handleSubmit(e){
        e.preventDefault()
        if (newComment.author === "" && newComment.body === ""){alert("You have to enter a message to write a review!")}
        else{
        if (newComment.author === ""){newComment.author = "anonymous"}
        fetch(`http://localhost:9292/artworks/${artwork.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
        .then((r) => r.json())
        .then((newComment) => handleAddComment(newComment))
        setNewComment({
            ...newComment,
            "author": "",
            "body": ""
        })
        console.log('submitted')}
    }

  return (
    <div>
        <h1>Comments</h1>
        {displayComments}
        <h3>Write your comment:</h3>
        <form onSubmit={handleSubmit}>
        <label>Your name: </label>
        <input type="text" id="author" name="author" value={newComment.author} onChange={handleChange}/><br/><br/>
            <CommentForm value={newComment.body} onChange={handleChange} className="body-input" type="textarea" id="body" name="body"></CommentForm><br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
// import React, { useState, useRef } from 'react'
// import Comment from '../Comment/Comment'
// import { CommentForm } from "./CommentsElements"

// function Comments({post, user}) {
//     const [commentText, setCommentText] = useState("")
//     const [allComments, setAllComments] = useState([...post.comments])
//     const displayComments = allComments.map((comment) => {
//         return <Comment key={comment.id} comment={comment} />
//     })
//     const commentCountRef = useRef(post.comments.length + 1)

//     function onSubmit(e){
//         e.preventDefault()
//         const newComment = {
//             "comments": [
//                 ...allComments,
//                 {"text": commentText,
//                 "id": (commentCountRef.current),
//                 "username": (user.given_name + " " + user.family_name)}
//             ]
//         }
//         fetch(`http://localhost:3004/posts/${post.id}`, {
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json"
//         },
//         body: JSON.stringify(newComment)
//         })
//         .then((r) => r.json())
//         .then((commentData) => setAllComments(commentData.comments))
//         setCommentText("")
//         commentCountRef.current += 1
// }

//     return (
//     <div>
//         <h1>Comments</h1>
//         {displayComments}
//         <h3>Write comment...</h3>
//         <form onSubmit={onSubmit}>
//             <CommentForm value={commentText} onChange={(e)=>setCommentText(e.target.value)} className="body-input" type="textarea" id="body" name="body"></CommentForm><br></br>
//             <input type="submit" value="Submit"/>
//         </form>
//     </div>
//   )
// }


// export default Comments
