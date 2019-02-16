import React from 'react';

function Item (props) {

	return (
		<div class="Item">
			<button>{props.label}: {props.price} KGS</button>
		</div>
	);
};

export default Item;
