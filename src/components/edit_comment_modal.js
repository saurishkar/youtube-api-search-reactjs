import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class EditCommentModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: true,
			name: this.props.comment.value.name,
			description: this.props.comment.value.description
		};
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		// this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	handleInputChange(event) {
		this.setState({
			name: event.target.value
		});
	}

	handleTextAreaChange(event) {
		this.setState({
			description: event.target.value
		});
	}

	render() {
		const editedComment = {
			key: this.props.comment.key,
			value: {
				'name': this.state.name,
				'description': this.state.description
			}
		};
		// console.log(this.state.name, this.state.description);
		return (
			<div>
				<Button
					bsStyle="warning"
					bsSize="small"
					onClick={this.open}
				>
				Edit
				</Button>
				<Modal show={this.state.showModal} onHide={this.close}>
					<form className="form-group" onSubmit={() => this.props.saveComment(this.props.commentId, editedComment)}>
						<Modal.Header closeButton>
							<Modal.Title>Edit Comment</Modal.Title>
						</Modal.Header>
						<Modal.Body>
						
							<input 
								type="text" 
								className="form-control" 
								value={this.state.name}
								placeholder="Enter Your Name"
								onChange= {this.handleInputChange}
							/>
							<br />
							<textarea
								className="form-control"
								value={this.state.description}
								placeholder="Enter your comment"
								onChange={this.handleTextAreaChange}
							/>
						</Modal.Body>
						<Modal.Footer>
							<Button bsStyle="success" type="submit">Save</Button>
							<Button bsStyle="danger" onClick={this.close}>Close</Button>
						</Modal.Footer>
					</form>
				</Modal>
			</div>
		);
	}
}