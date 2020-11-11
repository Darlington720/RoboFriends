import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from './ErrorBoundry';
import SearchBox from '../components/SearchBox';
import '../App.css';



class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			SearchField: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({SearchField: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}))
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
		})
		if (this.state.robots.length === 0) {
			return <h1>LOADING</h1>
		} else {
			return (
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
		}
	}
	
}


export default App;