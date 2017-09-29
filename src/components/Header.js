import React from 'react';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import {Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => (
	<Navbar>
    	<Navbar.Header>
      		<Navbar.Brand>
        		<Link to="/">React-Bootstrap</Link>
      		</Navbar.Brand>
    	</Navbar.Header>
    	<Nav>
	    	<LinkContainer to="/" exact={true}>
				<NavItem eventKey={1}>Home</NavItem>
	        </LinkContainer>
	        <LinkContainer to="/about">
				<NavItem eventKey={1}>About</NavItem>
	        </LinkContainer>
	        <LinkContainer to="/contact">
				<NavItem eventKey={1}>Contact</NavItem>
	        </LinkContainer>
	    </Nav>    
        <AuthButton />
  	</Navbar>
);

export default Header;