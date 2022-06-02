import React, { useState } from "react";
import CommentContent from "./CommentContent";
import Score from "./Score";
import UserInfo from "./UserInfo";
import DeleteReply from "./DeleteReply";
import ReplyButton from "./ReplyButton";
import AddComment from "./AddComment";

export default function Reply(props) {
  const [replyStatus, setReplyStatus] = useState(false);
  function displayReplies() {
    return props.reply.map((reply) => {
      return (
        <div className="comment-card-reply" key={reply.id}>
          <Score score={reply.score} />
          <UserInfo user={reply.user} date={reply.createdAt} />
          <ReplyButton
            handleComments={props.handleComments}
            allComments={props.allComments}
            addComment={setReplyStatus}
          />
          <CommentContent content={reply.content} />
          <DeleteReply
            id={reply.id}
            handleComments={props.handleComments}
            allComments={props.allComments}
          />
          {replyStatus && <AddComment />}
        </div>
      );
    });
  }
  return <div>{displayReplies()}</div>;
}
