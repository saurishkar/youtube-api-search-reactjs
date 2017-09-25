import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

import CommentIndex from "./components/comment_index";

const API_KEY = "AIzaSyBXtV0uOCzjIrVXcOBlx8gZHaHf3dr1ExQ";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			videoSelected: null
		};
		this.videoSearch("surfboards");

	}

	videoSearch(query) {
		// console.log(query);
		YTSearch({key: API_KEY, term: query}, (videos) => {
			this.setState({ videos, videoSelected: videos[0] });
		});
	}

	render() {
		// console.log(this.state.videos);
		return (
			<div>
				<SearchBar videoSearch={(query) => this.videoSearch(query)} />
				<br />
				<VideoDetail video={this.state.videoSelected} comments={this.state.comments}/>
				<VideoList onSelectVideo={videoSelected => this.setState({ videoSelected })} videos={this.state.videos} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.querySelector(".container"));