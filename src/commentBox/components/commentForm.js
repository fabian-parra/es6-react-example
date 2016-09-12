import React, { Component } from 'react'

class CommentForm extends Component {
  
  constructor() {
    super()
    this.state = { author: '', text: '' }
  }

  onAuthorChange(event) {
    this.setState({author: event.target.value})
  }

  onTextChange(event) {
    this.setState({text: event.target.value})
  }

  onSubmit(event){
    event.preventDefault()
    if(!this.state.author.trim() || !this.state.text.trim()){
      return
    }
    this.props.addComment({ author: this.state.author, text: this.state.text })
    this.setState({ author: '', text: '' })
  }

  render(){
    return (
      <div className='commentForm'>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='input' placeholder='Tu nombre' value={this.state.author} onChange={this.onAuthorChange.bind(this)}/>
          <input type='input' placeholder='Di algo...' value={this.state.text} onChange={this.onTextChange.bind(this)}/>
          <input type='submit' value='Comentar' />
        </form>
      </div>
    )
  }

}

export default CommentForm
