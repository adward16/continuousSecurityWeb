var axios = require('axios');

function getJava() {
	return axios.get('http://localhost:8080/greeting')
}

var helpers = {
	getJavaConnection: function() {
		return axios.all([getJava()])
			.then(function (arr) {
				return {
					java: arr[0].data
				}
			})
	}



	// getGithubInfo: function (username) {
	// 	return axios.all([getRepos(username), getUserInfo(username)]) // Waiting for both "promises" to be resolved before it returns an array of data to .then
	// 		.then(function (arr) {
	// 			return {
	// 				repos: arr[0].data,
	// 				bio: arr[1].data
	// 			}
	// 		});
}

module.exports = helpers;