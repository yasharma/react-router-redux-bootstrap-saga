import axios from 'axios';
export function login(url, options={}) {
	return new Promise((resolve, reject) => {
		axios.post(url, options)
		.then(response => {
			resolve({token: response.data.token,user: response.data.user });
		})
		.catch(error => {
			reject((error.response) ? error.response.data : error);
		});
	});
}