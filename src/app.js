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
    .catch((error) => {
      console.log('Error en llamada json',error)
    })
  }

  componentDidMount(){
    this.fetchComments()
    setInterval(this.fetchComments.bind(this), this.props.refreshInterval)
  }

  render(){
    return(
      <CommentBox data={this.state.data}/>    
    )
  }
}

export default App
