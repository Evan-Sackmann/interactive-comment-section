import React from "react";

export default function Delete(props) {
  function getCommentId() {
    props.handleComments(
      props.allComments.filter((comment) => comment.id !== props.id)
    );
  }
  return <button onClick={getCommentId}>Delete</button>;
}
