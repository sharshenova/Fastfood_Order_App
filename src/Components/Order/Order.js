import React from 'react';
import OrderItem from './OrderItem/OrderItem';

function Order (props) {

	return (
		<div class="Order">
			{props.items.map(item =>
				<OrderItem
					key = {item.name}
					name = {item.name}
					count = {item.count}
					total = {item.total}
				/>
			)}
		</div>

	);
};

export default Order;