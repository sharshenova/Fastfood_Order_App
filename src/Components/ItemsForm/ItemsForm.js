import React from 'react';
import Item from './Item/Item';

function ItemsForm (props) {

	return (
		<div Class='ItemsForm'>
			{props.items.map(item => 
				<Item
					key = {item.name}
					label = {item.label}
					price = {item.price}
				/>
			)}
		</div>
	);
};

export default ItemsForm;