import React, { Component } from 'react'
import Comment from './comment'

class CommentList extends Component {
  
  render(){
    const comments = this.props.comments.map((comment) => {
       return (<Comment key={comment.id} author={comment.author}>{comment.text}</Comment>)
    })
    return (
      <div className='commentList'>
        {comments}
      </div>
    )
  }

}

export default CommentList
