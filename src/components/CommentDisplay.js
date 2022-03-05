import React from "react";

function CommentDisplay({user, comment}){
    return(
        <>
            <h3>{user}</h3>
            <p>{comment}</p>
        </>
    )
}

export default CommentDisplay