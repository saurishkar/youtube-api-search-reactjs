import React from 'react';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	render() {
		return (
			<div>
				<input onChange={ this.handleInputChange }/>
				<strong> {this.state.term} </strong>
			</div>
			);
	}

	handleInputChange(event) {
		this.setState({
			term: event.target.value
		});
	};
}
export default SearchBar;