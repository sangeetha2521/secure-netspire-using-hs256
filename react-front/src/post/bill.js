import React, { Component } from 'react';
import PDF from './Pdf';
import Layout from '../core/Layout';

class bill extends Component {
    state = {
        title: '',
        price: '',
        quantity: '',
        totalprice:'',
        image: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.price||!this.state.quantity ||!this.state.totalprice||!this.state.image){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <Layout
            title="bill"
            description="Generate your bill!"
            className="container-fluid"
            >
            
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Create  a Bill</legend>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                    <input onChange={this.onChange('title')} name="title" type="text" placeholder="Product Name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                    <input onChange={this.onChange('price')} name="price" type="number" placeholder="Product Price" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                    <input onChange={this.onChange('quantity')} name="quantity" type="number" placeholder="Product quantity" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                    <input onChange={this.onChange('totalprice')} name="totalprice" type="number" placeholder="total Price" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                    <input onChange={this.onChange('image')} name="image" type="text" placeholder="https://" className="form-control" />
                                                </div>
                                                
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                      
                    </div>) : (
                        <PDF title={this.state.title} price={this.state.price} quantity={this.state.quantity} total price={this.state.totalprice} image={this.state.image} />
                    )
                }
            </>
            </Layout>
        );
    }
}

export default bill;