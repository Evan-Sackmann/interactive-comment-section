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
          userDetails={userDetails}
          commentKey={commentKey}
          setCommentKey={setCommentKey}
          allComments={commentsArray}
          handleComments={setCommentsArray}
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
        userDetails={userDetails}
        commentKey={commentKey}
        setCommentKey={setCommentKey}
        allComments={commentsArray}
        handleComments={setCommentsArray}
        newComment={true}
      />
    </div>
  );
}

export default App;
