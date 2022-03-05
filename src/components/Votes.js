import React from "react";

function Votes({upVotes, downVotes, handleLike, handleDislike}){
    return(
        <p>
            <button onClick={handleLike}>{upVotes} 👍</button>
            <button onClick={handleDislike}>{downVotes} 👎</button>
        </p>
    )
}

export default Votes