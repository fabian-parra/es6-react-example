import React, { Component } from 'react'
import CommentList from './components/commentList'
import CommentForm from './components/commentForm'

class CommentBox extends Component {

  render(){
    return (
      <div className='commentBox'>
        <h1>Caja de comentarios</h1>
        <CommentList comments={this.props.data}/>
        <CommentForm addComment={this.props.addComment}/>
      </div>    
    )
  }

}

export default CommentBox
