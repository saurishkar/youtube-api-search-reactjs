import React, {Component} from "react";
import CommentCreate from "./comment_create";
import CommentIndex from "./comment_index";

class VideoDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};
	}

	addComment(commentObj) {
		this.setState({
			comments: [commentObj, ...this.state.comments]
		});
	}

	render() {
		if(!this.props.video) {
			return <div>Loading....</div>;
		}
		const url="https://www.youtube.com/embed/"+ this.props.video.id.videoId;
		// console.log(this.props.video.id.videoId);
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div><br />
				<div className="details">
					<h4>{this.props.video.snippet.title}</h4>
					<div>{this.props.video.snippet.description}</div>
				</div><br />
				<CommentCreate comments={this.state.comments} addComment={(commentObj) => this.addComment(commentObj)} videoId={this.props.video.id.videoId} />
				<CommentIndex comments={this.state.comments} videoId={this.props.video.id.videoId} />
			</div>
		);
	}
}

export default VideoDetail;