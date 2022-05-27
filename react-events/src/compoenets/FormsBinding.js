//Two way data binding
import React, { Component } from 'react'

class FormsBinding extends Component {
    state ={
        username : ""
    }

    changeUsername = (event) =>{
        this.setState({
            username : event.target.value
        })

    }

  render() {
    return (
      <React.Fragment>
          
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header bg-success text-center'>
                              <h3>Change user name</h3>

                          </div>
                          <div className='card-body'>
                              <form>
                                  <div className='form-group'>
                                        <input onChange={this.changeUsername}  value={this.state.username} className='form-control' type="text" placeholder='User Name'  />
                                  </div>
                              </form>
                              <p className='h3'>{this.state.username}</p>

                          </div>

                      </div>
                    
                  </div>

              </div>

          </div>
      </React.Fragment>
    )
  }
}

export default FormsBinding