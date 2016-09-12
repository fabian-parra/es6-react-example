import React, { Component } from 'react'
import axios from 'axios'
import CommentBox from './commentBox/commentBox'

class App extends Component {

  constructor(){
    super()
    this.state = { data: [] }
  }

  fetchComments(){
    axios.get(this.props.url)
      .then((response) => {
        this.setState({data: response.data})
      })
  }

  addComment(comment) {
    axios.post(this.props.url,
        { comment },
        { headers: {'Content-Type': 'application/json'} })
      .then((response) => {
        this.setState({data: response.data})
      })
  }

  componentDidMount(){
    this.fetchComments()
    setInterval(this.fetchComments.bind(this), this.props.refreshInterval)
  }

  render(){
    return(
      <CommentBox data={this.state.data} addComment={this.addComment.bind(this)}/>    
    )
  }
}

export default App
