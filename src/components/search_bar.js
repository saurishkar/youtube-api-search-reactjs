import React from 'react';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
			<div className="container search-bar">
				<form onSubmit={() => this.props.videoSearch(this.state.value)}>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<button type="submit">Search</button>
					<strong> {this.props.searchQuery} </strong>
				</form>
			</div>
			);
	}

}
export default SearchBar;