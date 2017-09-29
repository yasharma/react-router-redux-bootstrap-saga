import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'};
window.axios.defaults.baseURL = 'http://localhost:9000/admin/';

// Global images url
window.IMAGE_PATH = 'http://localhost:9000';

// Add a request interceptor
axios.interceptors.request.use( function(config) {
  	// Do something before request is sent
  	return config;
}, function (error) {
  	// Do something with request error
  	return Promise.reject(error);
})

// Add a response interceptor
axios.interceptors.response.use( function(response) {
  	// Do something with response data
  	return response;
},  function(error) {
	if(!error.response){
		alert('Network Failure! Make sure you have an active internet connection.');
	}
	
  	// Do something with response error
  	return Promise.reject(error);
});
