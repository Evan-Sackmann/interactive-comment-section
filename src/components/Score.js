import React, { useState } from "react";
import upvote from "../images/icon-plus.svg";
import downvote from "../images/icon-minus.svg";

export default function Score(props) {
	const [scoreAdded, setScoreAdded] = useState(false);
	const [scoreRemoved, setScoreRemoved] = useState(false);

	function addScore() {
		let scoreValue = props.allComments.map((comment) => {
			if (comment.id === props.id) {
				return {
					...comment,
					score: !scoreAdded
						? (comment.score += 1)
						: (comment.score -= 1),
				};
			} else {
				return comment;
			}
		});
		props.handleComments(scoreValue);
		console.log(props.id);
		setScoreAdded((prev) => !prev);
	}
	function removeScore() {
		let scoreValue = props.allComments.map((comment) => {
			if (comment.id === props.id) {
				return {
					...comment,
					score: scoreRemoved
						? (comment.score += 1)
						: (comment.score -= 1),
				};
			} else {
				return comment;
			}
		});
		props.handleComments(scoreValue);
		console.log(props.id);
		setScoreRemoved((prev) => !prev);
	}
	return (
		<div className="comment-score">
			<button className="comment-button" onClick={addScore}>
				<img className="icon" src={upvote} alt="upvote" />
			</button>
			{props.score}
			<button className="comment-button" onClick={removeScore}>
				<img className="icon" src={downvote} alt="downvote" />
			</button>
		</div>
	);
}
