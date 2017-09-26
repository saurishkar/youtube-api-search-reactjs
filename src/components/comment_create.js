import React, { Component } from 'react';

export default class CommentCreate extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			description: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
		this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
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

	handleButtonSubmit(event) {
		// console.log("123");
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
		// console.log(this.props.comments);
		return (
			<div className="" id="createForm">
				<form className="form-group" onSubmit={this.handleButtonSubmit}>
					
					<input 
						type="text" 
						className="form-control" 
						name="name" 
						placeholder="Your Full Name" 
						value={this.state.name} 
						onChange={this.handleInputChange}
					/>
					<br />
					<textarea 
						className="form-control" 
						name="description" 
						value={this.state.description} 
						placeholder="Write your Comment"
						onChange={this.handleTextAreaChange}
					/>
					<br />
					<button 
						type="submit" 
						className="btn btn-success btn-sm align-right"
					> Save
					</button>
					<br />
				</form>
			</div>
		);
	}
}