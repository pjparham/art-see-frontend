import React, { useState } from 'react'
import Comment from './Comment'

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
        fetch(`http://localhost:9292/artworks/${artwork.id}/reviews`, {
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
        <h1>Reviews</h1>
        {displayComments}
        <h3>Write your review:</h3>
        <form onSubmit={handleSubmit}>
        <label>Your name: </label>
        <input type="text" id="author" name="author" value={newComment.author} onChange={handleChange}/><br/><br/>
            <textarea value={newComment.body} onChange={handleChange} className="comment-input" type="textarea" id="body" name="body"></textarea><br></br>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}
