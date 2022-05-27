import React, { Component } from 'react'

 class WishMessage extends Component {
     state ={
         msg : "Hello"
     }
     updateMessage = () =>{
         this.setState({
             msg : "Good Morning"
         })

     }
     //this is done by using the bind keyword 
     sayGoodAfternoon = (value) =>{
         this.setState({
             msg : value
         })

     }
   render() {
    return (
      <div>
          <h2>Welcome to {this.state.msg} Message</h2>
          <button 
          type='button' 
          onClick={this.updateMessage}
           className='btn btn-primary btn-sm'
           >Good Morning</button>
           <button type='button'
           //by using the bind keyword we can bind the function spectifc to that one
           //wt ever the we are passing will br passed as an argument to the arrow function 
           onClick={this.sayGoodAfternoon.bind(this,"Good Afternoon")}
           className='btn btn deep-orange btn-sm'>Good Afternoon </button>
      </div>
    )
  }
}
export default WishMessage