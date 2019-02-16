import React from 'react';
import OrderItem from './OrderItem/OrderItem';
import Total from './Total/Total';

function Order (props) {

	return <div className="box">
		<h4 className="box-title">Order:</h4>
		{props.foods.map(food =>
			<OrderItem
				key = {food.name}
				name = {food.name}
				count = {food.count}
				total = {food.total}
			/>
		)}
		<Total total={props.total}/>
	</div>
};

export default Order;