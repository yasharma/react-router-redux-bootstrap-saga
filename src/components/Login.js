import React, { Component } from 'react';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Form } from 'react-bootstrap';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";
import Alert from './common/Alert';
import { AUTH_REQUEST } from '../reducer';

class Login extends Component {
  	constructor(props) {
    	super(props);
    	this.formSubmit = this.formSubmit.bind(this);
  	}

  	render() {
	    const { error, handleSubmit, invalid, submitting} = this.props;
	    
	    return (
	    	<div className="container">
	    		<Alert alertVisible={error} alertMsg={error} className="danger" />
	        	<Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
	        		<Field component={FormField} type="email" name="email" label="Email" placeholder="Email Address" doValidate={true}/>
	        		<Field component={FormField} type="password" name="password" label="Password" placeholder="Password" doValidate={true}/>
	        		<FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Processing..."
	        		  buttonSave="Login"/>
	        	</Form>
	     	</div>
	    );
  	}
  	formSubmit(values) {
  		const { dispatch } = this.props;
  		return new Promise((resolve, reject) => {
  			dispatch({
  				type: AUTH_REQUEST,
  				user: {
  					email: values.email,
  					password: values.password
  				},
  				callbackError: (error) => {
  					reject(new SubmissionError({_error: error}));
  				},
  				callbackSuccess: () => {
  					dispatch(push('/'));
  					resolve();
  				}
  			})
  		});
  	}
}
Login = reduxForm({
	form: 'user_login',
	validate: (values) => {
		const errors = {};
		if(!values.email) {
			errors.email = 'Username is required';
		}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    		errors.email = 'Invalid email address'
  		}
  		if (!values.password) {
  		    errors.password = 'Password is Required'
  		}
		return errors;
	}
})(Login);
const mapStateToProps = (state) => ({
 	token: state.auth.token,
 	user: state.auth.user
});

export default connect(mapStateToProps)(Login);