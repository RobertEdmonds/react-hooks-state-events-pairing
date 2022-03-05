import React, {useState} from "react";
import CommentDisplay from "./CommentDisplay";

function Comments({comments}){
    const [viewComments, setViewComments] = useState(comments)
    function handleComments(){
        const toggleComment = (viewComments? [null] : [comments] )
        setViewComments(toggleComment)
      }
      console.log(viewComments)
    const separateComments = viewComments.map(item =>{
        if(item === null){
            return (<></>)
        }else{
        return(<CommentDisplay key={item.id} user={item.user} comment={item.comment}/> )
        }
    })
    return(
        <>
            <button onClick={handleComments}>Hide Comments</button>
            <br></br>
            <h2>Comments</h2>
            {separateComments}
        </>
    )
}

export default Comments