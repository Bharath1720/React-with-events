import React, { Component } from 'react'

 class GreetingMessage extends Component {
     state ={
         msg : "Hello"
     }

sayGoodMorning = ()=>{
this.setState({
    msg : "Good Morning "
})
}

sayGoodAfternoon = ()=>{
    this.setState({
        msg : "Good Afternoon "
    })
}

sayGoodEvening = ()=>{
    this.setState({
        msg : "Good Evening "
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
                              onClick={this.sayGoodMorning}
                              className='btn btn-light-green btn-sm'>Good Morning</button>
                              <button 
                               onClick={this.sayGoodAfternoon}
                              className='btn btn-orange btn-sm'>Good Afternoon</button>  
                              <button 
                              onClick={this.sayGoodEvening}
                              className='btn btn-info-color-dark btn-sm'>Good Evening</button>   
                         </div>

                     </div>

                 </div>

             </div>

         </div>
      </React.Fragment>
    )
  }
}
export default GreetingMessage