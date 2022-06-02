import React from "react";
import CommentContent from "./CommentContent";
import Delete from "./Delete";
import Reply from "./Reply";
import ReplyButton from "./ReplyButton";
import Score from "./Score";
import UserInfo from "./UserInfo";

export default function CommentCard(props) {
  const { id, score, createdAt, content, user, replies } = props.children;
  return (
    <div className="comment-card">
      <div className="comment-card-main">
        <Score score={score} />
        <UserInfo user={user} date={createdAt} />
        <ReplyButton
          handleComments={props.handleComments}
          allComments={props.allComments}
        />
        <CommentContent content={content} />
        <Delete
          id={id}
          handleComments={props.handleComments}
          allComments={props.allComments}
        />
      </div>
      <Reply
        reply={replies}
        handleComments={props.handleComments}
        allComments={props.allComments}
      />
    </div>
  );
}
