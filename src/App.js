import data from "./data.json";
import CommentCard from "./components/CommentCard";
import julius from "./images/avatars/image-juliusomo.png";
import { useState } from "react";
import AddComment from "./components/AddComment";

function App() {
  const [commentsArray, setCommentsArray] = useState(data.comments);
  const [commentKey, setCommentKey] = useState(5);
  const [userDetails, setUserDetails] = useState({
    username: "juliusomo",
    image: julius,
  });
  function createComments() {
    return commentsArray.map((comment) => {
      return (
        <CommentCard
          key={comment.id}
          handleComments={setCommentsArray}
          commentKey={commentKey}
          setCommentKey={setCommentKey}
          allComments={commentsArray}
          userDetails={userDetails}
        >
          {comment}
        </CommentCard>
      );
    });
  }

  return (
    <div className="App">
      {createComments()}
      <AddComment
        commentKey={commentKey}
        setCommentKey={setCommentKey}
        commentsArray={commentsArray}
        setCommentsArray={setCommentsArray}
      />
    </div>
  );
}

export default App;
