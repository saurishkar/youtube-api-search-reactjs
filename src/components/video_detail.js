import React, {Component} from 'react';
import CommentCreate from './comment_create';
import CommentIndex from './comment_index';
import { Button, Collapse } from 'react-bootstrap';

class VideoDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAddFormOpen: false
		};
	}

	render() {
		if(!this.props.video) {
			return <div>Loading....</div>;
		}
		const url='https://www.youtube.com/embed/'+ this.props.video.id.videoId;
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
				<Button 
					bsStyle="danger"
					className="form-control" 
					bsSize="small" 
					onClick={() => this.setState({isAddFormOpen: !this.state.isAddFormOpen})} 
				>
					Add Comment
				</Button>
				<br />
				<br />
				<Collapse in={this.state.isAddFormOpen}>
					<div>{ 
						this.state.isAddFormOpen && 
							<CommentCreate 
								comments={this.props.comments} 
								addComment={this.props.addComment} 
								videoId={this.props.video.id.videoId} 
							/>
					}
					</div>
				</Collapse>
				<br />
				<CommentIndex 
					comments={this.props.comments}
					videoId={this.props.video.id.videoId}
					deleteComment={this.props.deleteComment}
					saveComment={this.props.saveComment}
				/>
			</div>
		);
	}
}

export default VideoDetail;