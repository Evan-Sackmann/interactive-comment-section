import React, { useState } from "react";
import AddComment from "./AddComment";
import CommentContent from "./CommentContent";
import Delete from "./Delete";
import Reply from "./Reply";
import ReplyButton from "./ReplyButton";
import Score from "./Score";
import UserInfo from "./UserInfo";

export default function CommentCard(props) {
  const { id, score, createdAt, content, user, replies } = props.children;
  const [replyStatus, setReplyStatus] = useState(false);
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
        <Delete
          id={id}
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
          handleComments={props.handleComments}
          allComments={props.allComments}
        />
      )}
      <Reply
        reply={replies}
        handleComments={props.handleComments}
        allComments={props.allComments}
      />
    </div>
  );
}
