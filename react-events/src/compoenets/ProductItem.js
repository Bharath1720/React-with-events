import React, { Component } from 'react'
//Import font Awesome from MDB 
import { MDBIcon} from 'mdbreact';

class ProductItem extends Component {
    state = {
        product :{
                sno : 101,
                name  : "Bharath Watch",
                qty : 2,
                price : 500
        }
    }


    decQty  = () =>{
        this.setState({
            product : {
                ...this.state.product,
                qty : (this.state.product.qty -1 > 0 ? this.state.product.qty-1 : 1) 
            }
        })
       
    }

    // This is anoter way of of writing

    // decQty = () =>{
    //     const {product} = this.state
    //     const newProduct = {...product,
    //     qty : product.qty -1
    //     }
    //     this.setState({
    //         product : newProduct
    //     })
    // }

    incQty = () =>{
        this.setState({
            product : {
                ...this.state.product,
                qty : this.state.product.qty + 1
            }
        })
       
    }



  render() {
    return (
      <div>
          <h3 className='text-center m-3'>Product Item</h3>
          <div className='container'>
              <div className='row'>
                  <div className='col'>
                    <table className='table table-hover  table-striped text-center'>
                        <thead className='bg-primary text-white'>
                            <tr>
                                <th>Produvt Name</th>
                                <th>Product Qty</th>
                                <th>Product Price</th>
                                <th>Product Total</th>                                
                            </tr>
                        </thead>
                        <tbody className='text-dark'>
                            <tr>
                            <th>{this.state.product.sno}</th>
                            <th>{this.state.product.name}</th>
                            <th>
                            <MDBIcon onClick={this.decQty} far icon="minus-square" className='mx-1' />
                              {this.state.product.qty}
                              <MDBIcon onClick={this.incQty} far icon="plus-square" className='mx-1'/>
                              </th>
                            <th>{this.state.product.qty * this.state.product.price}</th>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                
              </div>

          </div>

      </div>
    )
  }
}
export default ProductItem