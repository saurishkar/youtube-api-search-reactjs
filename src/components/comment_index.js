import React, { Component } from "react";

export default class CommentIndex extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const comments = this.props.comments.map((elem, index) => {
			return (
				<li className="list-group-item" key={index}>
					<p>{elem.value.description}</p>
					<h6>{elem.value.name}</h6>
				</li>
			);
		});

		return (
			<div className="container">
				<ul className="list-group">
					{comments}
				</ul>
			</div>
		);
	}
}