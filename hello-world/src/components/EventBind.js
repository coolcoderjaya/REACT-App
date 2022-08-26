import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome to my Website!'
      }
      //this.clickHandler = this.clickHandler.bind(this)
    }
    //clickHandler(){
        //this.setState({
            //message: 'Goodbye! And have a nice day.'
        //})
    //}

    clickHandler = () => {
        this.setState({
            message: 'Goodbye! And have a nice day.'
        })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick = {this.clickHandler}>Click Here</button>
      </div>
    )
  }
}

export default EventBind