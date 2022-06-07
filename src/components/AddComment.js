import React, { useState } from "react";
import julius from "../images/avatars/image-juliusomo.png";

export default function AddComment(props) {
  const [input, setInput] = useState("");

  function postComment() {
    let newComment = {
      id: props.commentKey,
      content: input,
      createdAt: "Just Now",
      score: 0,
      user: {
        image: {
          png: props.userDetails.image,
        },
        username: props.userDetails.username,
      },
      replies: [],
    };
    if (props.edit) {
      let editComment = props.allComments.map((comment) => {
        return comment.id === props.id
          ? { ...comment, content: input }
          : comment;
      });
      props.handleComments(editComment);
      props.hideReply(false);
    } else if (props.newComment) {
      props.handleComments((prev) => [...prev, newComment]);
      props.setCommentKey((key) => key + 1);
    } else {
      let newReply = props.allComments.map((comment) => {
        return comment.id === props.id
          ? { ...comment, replies: [...comment.replies, newComment] }
          : comment;
      });
      props.handleComments(newReply);
      props.setCommentKey((key) => key + 1);
      props.hideReply(false);
    }
  }
  return (
    <div>
      <img src={julius} alt="avatar" />
      <input
        placeholder="Add a comment..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={postComment}>Send</button>
    </div>
  );
}
