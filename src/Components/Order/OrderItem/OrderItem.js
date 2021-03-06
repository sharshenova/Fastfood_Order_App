import React from 'react';

function OrderItem (props) {

	return <div className="OrderItem">
		<div className="row">
			<div className="col col-6">{props.label}</div>
			<div className="col col-1">x{props.count}</div>
			<div className="col col-3">{props.price} KGS</div>
			<div className="col col-1">
				<button className="DeleteButton" onClick={props.clicked}>X</button>
			</div>
		</div>
	</div>
};


export default OrderItem;