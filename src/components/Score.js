import React from "react";
import upvote from "../images/icon-plus.svg";
import downvote from "../images/icon-minus.svg";

export default function Score(props) {
  return (
    <div className="comment-score">
      <img className="icon" src={upvote} alt="upvote" />
      {props.score}
      <img className="icon" src={downvote} alt="downvote" />
    </div>
  );
}
