import React from 'react';
import OrderItem from './OrderItem/OrderItem';

function OrderForm (props) {

	return (
		<div class="OrderForm">
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

export default OrderForm;