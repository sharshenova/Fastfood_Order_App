import React from 'react';

function Total (props) {

	return <div className="OrderTotal">
		 <div className="row">
			<div className="col col-6">
				<p>Total price:</p>
			</div>
			<div className="col col-6">
				<p>{props.total}</p>
			</div>
		 </div>
	</div>
};

export default Total;