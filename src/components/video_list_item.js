import React, {Component} from 'react';

class VideoListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.video);
		const imageUrl = this.props.video.snippet.thumbnails.default.url;
		const url = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
		return (
			<li className="list-group-item" onClick= {() => this.props.onSelectVideo(this.props.video)}>
				
				<div className="video-list media">
					<div className="media-left">
						<img src={imageUrl} className="media-object" />
					</div>
				</div>
				<div className="media-body">
					<div className="media-heading">
						{this.props.video.snippet.title}
					</div>
				</div>
				
			</li>
			);
	}
}

export default VideoListItem;