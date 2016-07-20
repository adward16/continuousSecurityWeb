import React from 'react';
import ReactDom from 'react-dom';

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
			backend: 'None'
		}
	
		this.selectBackend = this.selectBackend.bind(this);
	}


	selectBackend(backend) {
		this.setState({backend: backend})
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
			</div>
		);
	}
}

export default App;