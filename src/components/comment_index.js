import React, { Component } from 'react';
import CommentEdit from './comment_edit';

export default class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const comments = this.props.comments.filter((elem) => {
			if (elem.key === this.props.videoId) {
				// console.log(elem.key);
				return true;
			} else return false;
		});

		const commentList = comments.length > 0 ? comments.map((elem, index) => {
			return (
				<CommentEdit key={index}
					comment={elem}
					index = {index}
					saveComment = {this.props.saveComment}
					deleteComment = {this.props.deleteComment}
				/>
			);
		}) : <div className="list-group-item" style={{ textAlign: 'center'}}> No Comments Available ! </div>;

		return (
			<div className="">
				<ul className="list-group">
					{commentList}
				</ul>
				<br />
			</div>
		);
	}
}