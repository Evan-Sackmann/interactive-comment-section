import React from "react";
import deleteIcon from "../images/icon-delete.svg";

export default function Delete(props) {
	function getCommentId() {
		let sorted = props.allComments.map((comment) => {
			if (comment.id === props.parentId) {
				return {
					...comment,
					replies: comment.replies.filter(
						(reply) => reply.id !== props.id
					),
				};
			} else {
				return comment;
			}
		});
		console.log(sorted);
		props.handleComments(sorted);
	}
	return (
		<button onClick={getCommentId}>
			<img src={deleteIcon} alt="" />
			Delete
		</button>
	);
}
