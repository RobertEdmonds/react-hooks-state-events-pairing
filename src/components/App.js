import React, {useState} from "react";
import video from "../data/video.js";
import Title from "./Title.js";
import VideoInfo from "./VideoInfo.js";
import Votes from "./Votes.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const [newLike, setNewLike] = useState(video.upvotes)
  const [newDisLike, setNewDislike] = useState(video.downvotes)

  function handleLike(){
    setNewLike(newLike + 1)
  }

  function handleDislike(){
    setNewDislike(newDisLike + 1)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Title title={video.title}/>
      <VideoInfo views={video.views} date={video.createdAt}/>
      <Votes downVotes={newDisLike} upVotes={newLike} handleDislike={handleDislike} handleLike={handleLike}/>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;
