import React from "react";

export default function ReplyButton(props) {
  function displayId() {
    props.addComment((prev) => !prev);
  }
  return <button onClick={displayId}>Reply</button>;
}
