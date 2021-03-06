import React, { Component } from 'react'


class CommentList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: "",
			email: "",
			displayName: null,
		}
	}

	render() {

		return (
		    <div className="commentList">
		      <h5 className="text-muted mb-4">
		        <span className="badge badge-success">{props.comments.length}</span>{" "}
		        Comment{props.comments.length > 0 ? "s" : ""}
		      </h5>

		      {props.comments.length === 0 ? (
		        <div className="alert text-center alert-info">
		          Be the first to comment
		        </div>
		      ) : null}

		      {props.comments.map((comment, index) => (
		        <Comment key={index} comment={comment} />
		      ))}
		    </div>
  				)

	}




}


export default QuestionsList