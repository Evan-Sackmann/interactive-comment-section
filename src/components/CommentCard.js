import React, { useState } from "react";
import AddComment from "./AddComment";
import CommentContent from "./CommentContent";
import DeleteButton from "./DeleteButton";
import EditComment from "./EditComment";
import Reply from "./Reply";
import ReplyButton from "./ReplyButton";
import Score from "./Score";
import UserInfo from "./UserInfo";

export default function CommentCard(props) {
	const { id, score, createdAt, content, user, replies } = props.children;
	const [replyStatus, setReplyStatus] = useState(false);
	const [editStatus, setEditStatus] = useState(false);
	return (
		<div className="comment-card">
			<div className="comment-card-main">
				<Score score={score} />
				<UserInfo user={user} date={createdAt} />
				<ReplyButton
					id={id}
					handleComments={props.handleComments}
					allComments={props.allComments}
					addComment={setReplyStatus}
				/>
				<CommentContent content={content} />
				{user.username === props.userDetails.username && (
					<div>
						<DeleteButton
							id={id}
							handleComments={props.handleComments}
							allComments={props.allComments}
						/>
						<EditComment
							id={id}
							handleComments={props.handleComments}
							allComments={props.allComments}
							addComment={setEditStatus}
						/>
					</div>
				)}
				<Reply
					userDetails={props.userDetails}
					reply={replies}
					parentId={id}
					handleComments={props.handleComments}
					allComments={props.allComments}
				/>
			</div>
			{replyStatus && (
				<AddComment
					userDetails={props.userDetails}
					commentKey={props.commentKey}
					setCommentKey={props.setCommentKey}
					id={id}
					content={content}
					handleComments={props.handleComments}
					allComments={props.allComments}
					newComment={false}
					hideReply={setReplyStatus}
				/>
			)}
			{editStatus && (
				<AddComment
					userDetails={props.userDetails}
					commentKey={props.commentKey}
					setCommentKey={props.setCommentKey}
					id={id}
					handleComments={props.handleComments}
					allComments={props.allComments}
					edit={true}
					hideReply={setEditStatus}
				/>
			)}
		</div>
	);
}
