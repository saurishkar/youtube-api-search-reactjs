import React from 'react';

export const CommentForm = props => {
	return (
		<form className="form-group" onSubmit={props.handleFormSubmit()}>	
			<input 
				type="text" 
				className="form-control" 
				name="name" 
				placeholder="Your Full Name" 
				value={props.name} 
				onChange={props.handleInputChange()}
			/>
			<br />
			<textarea 
				className="form-control" 
				name="description" 
				value={props.description} 
				placeholder="Write your Comment"
				onChange={props.handleTextAreaChange()}
			/>
			<br />
			<button 
				type="submit" 
				className="btn btn-success btn-sm"
			> Save
			</button>
			<button onClick={props.handleCancel()} className="btn btn-sm btn-danger">Cancel</button>
			<br />
		</form>
	); 
};