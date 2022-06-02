import React from "react";

export default function Delete(props) {
  function getCommentId() {
    console.log(props.id);
    let newVal = [];
    props.allComments.forEach((comment) =>
      // comment.replies.filter((reply) => reply.id !== props.id)
      {
        if (comment.replies.length > 0) {
          newVal.push(comment.replies);
        }
      }
    );
    console.log(typeof newVal);
  }
  return <button onClick={getCommentId}>Delete</button>;
}
