import React from 'react';
import MenuItem from './MenuItem/MenuItem';

function Menu (props) {

	return <div className="box">
		<h4 className="box-title">Menu:</h4>
		<div className="row">
			{props.foods.map(food => <div className="col col-6">
				<MenuItem
					key = {food.name}
					icon = {food.icon}
					label = {food.label}
					price = {food.price}
				/>
			</div>)}
		</div>
	</div>
};

export default Menu;