import React from 'react';
import ReactDom from 'react-dom';

var helpers = require('./helpers.js');

export default App;
class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Recipe Sharing</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			backend: 'None',
			usages: 0
		}
	
		this.selectBackend = this.selectBackend.bind(this);
	}

	selectBackend(backend) {
		var _this = this;
		this.serverRequest = 
			helpers.getJavaConnection()
				.then(function(result) {
					_this.setState({
						backend: backend,
						usages: result.java.count
					});
				})

	}

	render() {
		return (
			<div>
				<button onClick = {() =>
					this.selectBackend('C-Sharp')}>C#</button>
				<button onClick = {() =>
					this.selectBackend('Java')}>Java</button>
				<button onClick = {() =>
					this.selectBackend('Ruby')}>Ruby</button>
				<h2>Backend Selected: {this.state.backend}</h2>
				<h2>Called {this.state.usages} Times</h2>
			</div>
		);
	}
}

export default App;