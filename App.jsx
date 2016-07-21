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
	
		this.selectCsharp = this.selectCsharp.bind(this);
		this.selectJava = this.selectJava.bind(this);
		this.selectRuby = this.selectRuby.bind(this);
	}

	selectCsharp() {
		var _this = this;
		_this.setState({
			backend: 'C-Sharp',
			message: "Connection Not Yet Implemented"
		})
	}

 	selectJava() {
 		var _this = this;
		this.serverRequest = 
			helpers.getJavaConnection()
				.then(function(result) {
					_this.setState({
						backend: 'Java',
						message: 'Called ' + result.java.count + ' Times'
					});
				})
	}

	selectRuby() {
		var _this = this;
		_this.setState({
			backend: 'Ruby',
			message: 'Connection Not Yet Implemented'
		})
	}

	render() {
		return (
			<div>
				<button onClick = {() =>
					this.selectCsharp()}>C#</button>
				<button onClick = {() =>
					this.selectJava()}>Java</button>
				<button onClick = {() =>
					this.selectRuby()}>Ruby</button>
				<h2>Backend Selected: {this.state.backend}</h2>
				<h2>{this.state.message}</h2>
			</div>
		);
	}
}

export default App;