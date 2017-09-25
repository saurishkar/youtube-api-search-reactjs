import React from "react";


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.props.videoSearch(this.state.value);
	}

	render() {
		// console.log(this.state.value);
		return (
			<div className="container search-bar">
				<form onSubmit={this.handleFormSubmit}>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<button type="submit">Search</button>
					<strong> {this.props.searchQuery} </strong>
				</form>
			</div>
		);
	}

}
export default SearchBar;