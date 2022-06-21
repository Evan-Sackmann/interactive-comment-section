import React from "react";
import deleteIcon from "../images/icon-delete.svg";

export default function DeleteButton(props) {
	function getCommentId() {
		props.handleComments(
			props.allComments.filter((comment) => comment.id !== props.id)
		);
	}
	return (
		<button className="comment-button" onClick={getCommentId}>
			<img src={deleteIcon} alt="" />
			Delete
		</button>
	);
}
