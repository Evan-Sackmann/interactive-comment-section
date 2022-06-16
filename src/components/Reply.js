import React, { useState } from "react";
import CommentContent from "./CommentContent";
import Score from "./Score";
import UserInfo from "./UserInfo";
import DeleteReply from "./DeleteReply";
import ReplyButton from "./ReplyButton";
import AddComment from "./AddComment";
import EditComment from "./EditComment";

export default function Reply(props) {
	const [replyStatus, setReplyStatus] = useState(false);
	function displayReplies() {
		return props.reply.map((reply) => {
			return (
				<div className="comment-card-reply" key={reply.id}>
					<Score score={reply.score} />
					<UserInfo user={reply.user} date={reply.createdAt} />
					{props.userDetails.username !== reply.user.username && (
						<ReplyButton
							handleComments={props.handleComments}
							allComments={props.allComments}
							addComment={setReplyStatus}
						/>
					)}
					<CommentContent content={reply.content} />
					{props.userDetails.username === reply.user.username && (
						<div>
							<DeleteReply
								parentId={props.parentId}
								id={reply.id}
								handleComments={props.handleComments}
								allComments={props.allComments}
							/>
							<EditComment />
						</div>
					)}
					{replyStatus && <AddComment />}
				</div>
			);
		});
	}
	return <div>{displayReplies()}</div>;
}
