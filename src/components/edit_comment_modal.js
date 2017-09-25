import React, {Component} from 'react';

export default class EditCommentModal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="myModal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Edit Comment</h4>
						</div>
						<div className="modal-body">
							<p>Some text in the modal.<br/>
							</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}