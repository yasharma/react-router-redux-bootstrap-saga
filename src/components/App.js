import React from 'react';


import {Router} from '../router';

const App = props => {
  	const { history } = props;

  	return (
  		<Router history={history}/>
  	);
};

export default App;