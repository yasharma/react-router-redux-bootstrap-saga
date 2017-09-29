import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PrivateRoute from './router/PrivateRoute';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';

export const Router = props => {
	const { history } = props;
	return (
		<ConnectedRouter history={history}>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={Main} />
			    	<Route path="/login" component={Login} />
			    	<Route path="/about" component={About} />
			    	<Route path="/contact" component={Contact} />
			    	<PrivateRoute path="/profile" component={Profile}/>
			  	</Switch>
		  	</div>
		</ConnectedRouter>
	);	
}