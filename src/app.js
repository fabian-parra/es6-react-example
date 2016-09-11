import React, { Component } from 'react'
import axios from 'axios'
import CommentBox from './commentBox/commentBox'

class App extends Component {

  constructor(){
    super()
    this.state = { data: [] }
  }

  componentDidMount(){
    axios.get(this.props.url)
      .then((response) => {
        this.setState({data: response.data})
      })
      .catch((error) => {
        console.log('Error en llamada json',error)
      })
  }

  render(){
    return(
      <CommentBox data={this.state.data}/>    
    )
  }
}

export default App
