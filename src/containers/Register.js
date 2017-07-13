import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button, Col} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import RegisterAction from '../actions/RegisterAction';
import {connect} from 'react-redux';

class Register extends Component{
    constructor(props){
        super(props);
        this.handleRegistration = this.handleRegistration.bind(this)
    }

    handleRegistration(event){
        event.preventDefault();
        console.log('user submitted a form')
        var name = event.target[0].value;
        console.log(name);
        var email = event.target[1].value;
        var accountType = 'customer';
        var password = event.target[3].value;
        var city = event.target[4].value;
        var state = event.target[5].value;
        var salesRep = event.target[6].value;
    }


    render(){
        return(
            <div className="register-wrapper">
                <Form horizontal onSubmit={this.handleRegistration}>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Name
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="full_name"placeholder="Full Name"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="email" placeholder="email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Account Type
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="type" value='customer' disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="password" name="password" placeholder="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            City
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="city" placeholder="city"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            State
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="state" placeholder="state"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalName">
                        <Col componentClass={ControlLabel} sm={2}>
                            SalesRep
                        </Col>
                        <Col componentClass={ControlLabel} sm={10}>
                            <FormControl type="text" name="employee" placeholder="Employee you worked with"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={2}>
                            <Button bsStyle="primary" bsSize="small" type="submit">
                                Register
                            </Button>

                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerAction: RegisterAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Register);