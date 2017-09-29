import React, {Component} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { AUTH_LOGOUT_REQUEST } from '../reducer';
 
class AuthButton extends Component {
  render() {
    const { token } = this.props;
    return (
    	token ? (
    		<Nav pullRight>
  	    	<LinkContainer to="/profile">
  				<NavItem eventKey={1}>Profile</NavItem>
  	        </LinkContainer>
      		<NavItem onClick={() => this.logout()} eventKey={1}>Logout</NavItem>
      	</Nav>	
    	) : (
    		<Nav pullRight>
  	    	<LinkContainer to="/login">
  				<NavItem eventKey={1}>Login</NavItem>
  	        </LinkContainer>
  	    </Nav>    
    	)
    );  
  }
  logout() {
  	const { dispatch } = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: AUTH_LOGOUT_REQUEST,
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      })
    });
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps, null, null, {pure:false})(AuthButton);