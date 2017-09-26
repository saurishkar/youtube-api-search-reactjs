import React, { Component } from 'react';
import EditCommentModal from './edit_comment_modal';

export default class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	handleFormSubmit() {

	}

	render() {
		const comments = this.props.comments.filter((elem) => {
			if (elem.key === this.props.videoId) {
				// console.log(elem.key);
				return true;
			} else return false;
		});
		console.log('comments: ', comments);
		const commentList = comments.length > 0 ? comments.map((elem, index) => {
			return (
				<li className="list-group-item" key={index}>
					<a className="btn-sm btn-danger align-right" onClick={() => this.props.deleteComment(index)}><small>Delete</small></a>
					<p>{elem.value.description}</p>
					<h6>{elem.value.name}</h6>
					<a className="text-warning"><small>Edit</small></a>
				</li>
			);
		}) : <div className="list-group-item text-center"> No Comments Available ! </div>;

		// console.log(this.props.comments);
		return (
			<div className="">
				<ul className="list-group">
					{commentList}
				</ul>
				<EditCommentModal />
			</div>
		);
	}
}