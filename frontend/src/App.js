import React from 'react';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Market from './components/Market';

function App() {

  return (
    <div className="p-6">
      <div className="grid grid-cols-12 grid-rows-auto gap-6 my-8">

		<div className="col-span-2">
			<div className="fixed">
				<div className="mb-8">
					<p className='text-3xl'>Robot Market</p>
				</div>
			<Filter />
			</div>
		</div>

		<div className="col-span-8">
			<Market />
		</div>

		<div className="col-span-2">
			<div className="fixed">
				<Cart />
			</div>
		</div>
	  	
	  </div>
    </div>
  );
}

export default App;
