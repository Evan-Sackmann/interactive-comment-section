import React from "react";
import editIcon from "../images/icon-edit.svg";

export default function EditComment(props) {
  function editComment() {
    props.addComment((prev) => !prev);
  }
  return (
    <div>
      <button onClick={editComment}>
        <img src={editIcon} alt="" />
        Edit
      </button>
    </div>
  );
}
