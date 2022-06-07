import React from "react";

export default function EditComment(props) {
  function editComment() {
    props.addComment((prev) => !prev);
  }
  return (
    <div>
      {/* 
            create input area in content section on button click
            update comment in state with new content
        */}
      <button onClick={editComment}>Edit</button>
    </div>
  );
}
