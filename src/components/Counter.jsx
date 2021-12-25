import React, { Component } from 'react';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			value: Math.floor(Math.random() * 100) + 1,
		};
	}

	render() {
		const { value } = this.state;

		return (
			<div className="grid grid-cols-3 bg-gray-600 w-48 rounded-full py-2 m-2">
				<p className="m-auto bg-red-700 rounded-full w-8 text-center text-white">
					+
				</p>
				<p className="m-auto text-white">{value}</p>
				<p className="m-auto bg-yellow-500 rounded-full w-8 text-center text-white">
					-
				</p>
			</div>
		);
	}
}

export default Counter;
