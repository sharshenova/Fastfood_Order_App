import React from 'react';

function MenuItem (props) {

	return <div className="MenuItem" onClick={props.clicked}>
		<div className="row">
			<div className="col col-4">
				<img className="FoodIcon" src={props.icon} alt={props.label}/>
			</div>
			<div className="col col-8">
				<p>{props.label}</p>
				<p>Price: {props.price} KGS</p>
			</div>
		</div>
	</div>
};

export default MenuItem;
