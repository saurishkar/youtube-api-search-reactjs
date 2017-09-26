import React, { Component } from 'react';

export default class CommentEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditable: false,
			name: '',
			description: ''
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleCancel = this. handleCancel.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			name: nextProps.comment.value.name,
			description: nextProps.comment.value.description,
			isEditable: false
		});
	}

	componentDidMount() {
		this.setState({
			name: this.props.comment.value.name,
			description: this.props.comment.value.description
		});
	}

	handleClick() {
		this.setState({
			isEditable: true
		});
	}

	handleCancel() {
		this.setState({
			isEditable: false
		});
	}
	
	handleFormSubmit(event) {
		event.preventDefault();
		const newComment = {
			key: this.props.comment.key,
			value: {
				'name': this.state.name,
				'description': this.state.description
			}
		};
		// console.log(newComment);
		this.setState({
			isEditable: false
		});

		this.props.saveComment(this.props.index, newComment);
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
		// console.log(this.props.comments);
		if (!this.state.isEditable) {
			return(
				<li className="list-group-item">
					<a 
						className="btn-sm btn-danger align-right" 
						onClick={() => this.props.deleteComment(this.props.index)}
					>
						<small>
							Delete
						</small>
					</a>
					<p>{this.props.comment.value.description}</p>
					<h6>{this.props.comment.value.name}</h6>
					<a onClick={this.handleClick} className="text-warning"><small>Edit</small></a>
				</li>
			);
		} else {
			return (
				<li className="list-group-item">
					<form className="form-group" onSubmit={this.handleFormSubmit}>
						<input 
							type="text" 
							className="form-control" 
							value={this.state.name} 
							onChange={this.handleInputChange} 
							placeholder="Your Full Name" 
						/>
						&nbsp;
						<textarea 
							className="form-control" 
							value={this.state.description} 
							onChange={this.handleTextAreaChange} 
							placeholder="Your Comment..." 
						/>
						<br />
						<button type="submit" className="btn btn-sm btn-success">Submit</button>
						<button onClick={this.handleCancel} className="btn btn-sm btn-danger">Cancel</button>
					</form>
				</li>
			);
		}
	}
}