import React, { Component } from 'react';
import './App.css';
import ItemsForm from './Components/ItemsForm/ItemsForm';
import OrderForm from './Components/OrderForm/OrderForm';

const FOODS = [
	{name: 'hamburger', price: 80, label: 'Hamburger'},
	{name: 'coffee', price: 70, label: 'Coffee'},
	{name: 'cheeseburger', price: 90, label: 'Cheeseburger'},
	{name: 'tea', price: 50, label: 'Tea'},
	{name: 'fries', price: 45, label: 'Fries'},
	{name: 'cola', price: 40, label: 'Cola'}
];


class App extends Component {
	state = {
		items: [
			{name: 'hamburger', count: 0, total: 0},
			{name: 'coffee', count: 0, total: 0},
			{name: 'cheeseburger', count: 0, total: 0},
			{name: 'tea', count: 0, total: 0},
			{name: 'fries', count: 0, total: 0},
			{name: 'cola', count: 0, total: 0}
		],
		totalPrice: 0
	};

	const addItem = (name) => {
		


		return (

		)
	}



	render() {
		return (
			<div className="Container">
				<ItemsForm items={FOODS}/>
				<OrderForm items={this.state.items}/>
			</div>
		);
	}
}

export default App;
