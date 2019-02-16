import React from 'react';

function OrderItem (props) {

	return (
		<div class="OrderItem">
			<h3>{props.name} x {props.count}: {props.total}</h3>
		</div>
	);
};


export default OrderItem;