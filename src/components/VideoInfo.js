import React from "react";

function VideoInfo({views, date}){
    console.log(views)
    return(
        <>
            <p>{views} Views | Uploaded {date}</p>
        </>
    )

}

export default VideoInfo