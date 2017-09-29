import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertNotification = props => {
	const { className, alertMsg, alertVisible } = props;
	if(alertVisible) {
		return(
			<Alert bsStyle={className}>
				{alertMsg}
			</Alert>
		);	
	} else {
		return null;
	}
	
}

export default AlertNotification;