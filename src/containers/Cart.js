import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import GetCart from '../actions/GetCart'
import ProductTableRow from '../components/ProductTableRow';
import $ from 'jquery'
import {Link} from 'react-router-dom';

class Cart extends Component{

    constructor(props){
        super(props);
        this.makePayment = this.makePayment.bind(this)
    }


    componentDidMount() {
        if(this.props.loginInfo.token !== undefined){
            this.props.getCart(this.props.loginInfo.token)
        }else{

        }
    }

    makePayment() {
        var handler = window.StripeCheckout.configure({
            key: 'pk_test_0XK97hJEf4SkV96mQvSxNt5i',
            locale: 'auto',
            token: (token) => {
                console.log(token)
                var theData = {
                    amount: this.props.cartInfo.totalPrice * 100,
                    stripeToken: token.id,
                    userToken: this.props.loginInfo.token,
                }
                $.ajax({
                    method: 'POST',
                    url: window.hostAddress+'/stripe',
                    data: theData
                }).done((data) => {
                    console.log(data);
                    if (data.msg === 'paymentSuccess') {
                        this.props.history.push('/thankYou');
                    }
                });
            }
        });
        handler.open({
            name: "Pay Now",
            description: 'Pay Now',
            amount: this.props.cartInfo.totalPrice * 100
        })
    }

    render(){

        if(this.props.cartInfo.products === undefined){
            return (
                <div>
                    <h3>Your cart is empty.  Get shopping or <Link to="/login">login.</Link></h3>
                </div>
            )
        }

        var cartArray = [];
        this.props.cartInfo.products.map((product,index)=>{
            console.log(product)
            cartArray.push(
                <ProductTableRow
                    key={index}
                    product={product}
                    addToCart={null}
                    loggedIn={false}
                    token={null}
                />
            )
        })


        console.log(this.props.cartInfo);
        return(
            <div>
                <div>
                    <h3 id='pay-now'>Your order total is ${this.props.cartInfo.totalPrice}</h3>
                    <button className="btn btn-primary" onClick={this.makePayment}>
                        Pay now!
                    </button>
                </div>
                {cartArray}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        loginInfo: state.registerReducer,
        cartInfo: state.cartReducer
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        getCart: GetCart
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)