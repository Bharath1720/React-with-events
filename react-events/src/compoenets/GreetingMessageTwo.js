import React, { Component } from 'react'

 class GreetingMessageTwo extends Component {
     state ={
         msg : "Hello"
     }

     updateMessage = (value) =>{
         this.setState({
             msg : value
         })
     }


  render() {
    return (
      <React.Fragment>
         <div className='container mt-3'>
             <div className='row'>
                 <div className='col-12'>
                     <div className='card'>
                         <div className='card-body'>
                             <p className='h3'>{this.state.msg}</p>
                              <button
                              onClick={this.updateMessage.bind(this,"Good Morning")}
                              className='btn btn-red btn-sm'>Good Morning</button>
                              <button 
                               onClick={this.updateMessage.bind(this,"Good Afternoon")}
                              className='btn btn-blue-gradient btn-sm'>Good Afternoon</button>  
                              <button 
                              onClick={this.updateMessage.bind(this,"Good Evening")}
                              className='btn btn-yellow btn-sm'>Good Evening</button>   
                         </div>

                     </div>

                 </div>

             </div>

         </div>
      </React.Fragment>
    )
  }
}
export default GreetingMessageTwo