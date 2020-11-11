import React from 'react';


const SearchBox = ({searchChange}) => {
	return (
	<div className='ma3'>
		<input className='ba b--green pa3 bg-light-green' type='search' placeholder='search robots' onChange={searchChange} />
	</div>
	);
}


export default SearchBox;