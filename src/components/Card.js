import React from 'react';


const Card = ({name, username, email}) => {
	return (
		<div className='bg-lightest-blue dib pa3 ma2 bw3 br2 grow shadow-1'> 
			<img alt='robo' src={`https://robohash.org/${username}`} width='200px' height='200px'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}


export default Card;