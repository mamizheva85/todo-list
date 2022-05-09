import React from 'react'
let datetime = () => {
	let showdate = new Date();
	let dt=showdate.toDateString();

	return(
		<div className="daytime">
			<center>
				<input className = "date" type="text" value={dt} />
				
			</center>
		</div>
	)

}

export default datetime
