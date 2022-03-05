import React, {useState} from "react";
import CommentDisplay from "./CommentDisplay";

function Comments({comments}){
    const [isHidingComments, setIsHidingComments] = useState(false)
    function handleComments(){
        setIsHidingComments(!isHidingComments)
        
      }
    //   console.log(isHidingComments)
    const separateComments = isHidingComments ? null : (comments.map(item =><CommentDisplay key={item.id} user={item.user} comment={item.comment}/>));
    return(
        <>
            <button onClick={handleComments}>{isHidingComments?"Show Comments":"Hide Comments" }</button>
            <br></br>
            <h2>Comments</h2>
            {separateComments}
        </>
    )
}

export default Comments