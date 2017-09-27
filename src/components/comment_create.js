import React, { Component } from 'react';
import { CommentForm } from './comment_form_partial';

export default class CommentCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
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

	handleCancel() {
		this.props.closeForm();
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.addComment(
			{ key: this.props.videoId,
				value: {
					'name': this.state.name,
					'description': this.state.description
				}
			}
		);
		this.setState({
			name: '',
			description: ''
		});
	}

	render() {
		return (
			<div className="" id="createForm">
				<CommentForm
					name={this.state.name}
					description={this.state.description}
					handleCancel={() => this.handleCancel}
					handleInputChange = {()=> this.handleInputChange}
					handleTextAreaChange = {()=> this.handleTextAreaChange}
					handleFormSubmit = {()=> this.handleFormSubmit}
				/>
			</div>
		);
	}
}