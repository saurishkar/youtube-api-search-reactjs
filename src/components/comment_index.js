import React, { Component } from "react";

export default class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const comments = this.props.comments.filter((elem) => {
			if (elem.key === this.props.videoId) {
				return true;
			} else return false;
		});

		const commentList = comments.length > 0 ? this.props.comments.map((elem, index) => {
			return (
				<li className="list-group-item" key={index}>
					<a className="text-danger align-right" onClick={() => this.props.deleteComment(index)}><small>Delete</small></a>
					<p>{elem.value.description}</p>
					<h6>{elem.value.name}</h6>
				</li>
			);
		}) : <div className="list-group-item text-center"> No Comments Available ! </div>;

		console.log(this.props.comments);
		return (
			<div className="container">
				<ul className="list-group">
					{commentList}
				</ul>
			</div>
		);
	}
}