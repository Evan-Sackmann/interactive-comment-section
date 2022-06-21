import React from "react";
import reply from "../images/icon-reply.svg";

export default function ReplyButton(props) {
	function displayId() {
		props.addComment((prev) => !prev);
	}
	return (
		<button className="comment-button" onClick={displayId}>
			<img src={reply} alt="" />
			Reply
		</button>
	);
}
