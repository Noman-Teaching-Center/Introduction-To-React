import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			value: Math.floor(Math.random() * 100) + 1,
		};
	}

	decrementCounter = () => {
		const { value } = this.state;
		this.setState({
			value: value - 1,
		});
	};

	incrementCounter = () => {
		const { value } = this.state;
		this.setState({
			value: value + 1,
		});
	};

	render() {
		const { value } = this.state;

		return (
			<div className="grid grid-cols-3 bg-gray-600 w-48 rounded-full py-2 m-2">
				<button
					type="button"
					onClick={this.incrementCounter}
					className="m-auto bg-red-700 rounded-full w-8 text-center text-white"
				>
					+
				</button>
				<p className="m-auto text-white">{value}</p>
				<button
					type="button"
					onClick={this.decrementCounter}
					className="m-auto bg-yellow-500 rounded-full w-8 text-center text-white"
				>
					-
				</button>
			</div>
		);
	}
}

export default Counter;
