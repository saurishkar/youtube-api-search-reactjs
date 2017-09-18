import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBXtV0uOCzjIrVXcOBlx8gZHaHf3dr1ExQ';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
			);
	}
}
ReactDOM.render(<App />, document.querySelector('.container'));