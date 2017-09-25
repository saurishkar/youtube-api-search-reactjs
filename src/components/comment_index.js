import React, { Component } from "react";

export default class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	handleFormSubmit() {

	}

	render() {
		const comments = this.props.comments.filter((elem) => {
			if (elem.key === this.props.videoId) {
				return true;
			} else return false;
		});

		const editModal = (
			<div className="modal fade" id="myModal" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Edit Comment</h4>
						</div>
						<div className="modal-body">
							<p>Some text in the modal.<br/>
							</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
		const commentList = comments.length > 0 ? this.props.comments.map((elem, index) => {
			return (
				<li className="list-group-item" key={index}>
					<a className="btn-sm btn-danger align-right" onClick={() => this.props.deleteComment(index)}><small>Delete</small></a>
					<p>{elem.value.description}</p>
					<h6>{elem.value.name}</h6>
					<a className="text-warning" data-toggle="modal" data-target="#myModal"><small>Edit</small></a>
					{editModal}
				</li>
			);
		}) : <div className="list-group-item text-center"> No Comments Available ! </div>;

		console.log(this.props.comments);
		return (
			<div className="">
				<ul className="list-group">
					{commentList}
				</ul>
			</div>
		);
	}
}