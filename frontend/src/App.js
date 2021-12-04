import React, {  useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import Market from './components/Market';
import { AiOutlineShoppingCart } from "react-icons/ai";

const url = 'http://localhost:8000/api/robots';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true)
 
  const arr1 = [];
  robots.map((item) => 
    arr1.push(item.material)
  )
  const uniqueMaterials = [...new Set(arr1)];
  console.log(uniqueMaterials);

  const fetchRobot = async () => {
    setLoading(true);
        try {
            const response = await fetch (url);
            const robots = await response.json();
            console.log(robots);
            setLoading(false);
            setRobots(robots.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
       fetchRobot();
    }, [])

   if(loading) {
    return <main className='w-1/5 my-36 mx-auto text-center'>
      <Loader type="Hearts" color="#00BFFF" height={150} width={150} />
    </main>
  }

  return (
    <main className="p-4">
    	<p className='text-5xl font-bold text-gray-400 text-center'>ROBOT MARKET</p>
      
    <div className="grid grid-cols-12 grid-rows-auto gap-6 my-8 text-gray-700 relative">

		<div className="col-span-3 fixed top-8 w-1/4">
          <p className='my-6 text-2xl font-bold'>Product Material</p>
          <div className="flex justify-around items-center flex-wrap mr-6">
            { 
              uniqueMaterials.map(material => {
                  return (
                     <button className='font-semiBold material text-white m-2'>{material}</button> 
                  
                 
                  )
              })
          }
        </div>
        <div className="mt-28">
            <button className='flex justify-center items-center text-center p-6 bg-red-500 hover:bg-red-700 rounded w-2/4 h-12 text-white'>
                    <AiOutlineShoppingCart className='text-3xl mr-4' /> Cart <sup className='ml-3 bg-white text-black p-2'>2</sup>
            </button>
        </div>
		</div>

		<div className="col-span-9 absolute right-0 w-3/4">
			 <div className='grid grid-cols-12 grid-rows-auto gap-6'>
        {
            robots.map(item => {
                return (
                  <Market name={item.name} stock={item.stock} image={item.image} createdAt={item.createdAt} material={item.material} price={item.price} />
                )
            })
        }
           
        </div>
		</div>

	  </div>
    </main>
  );
}

export default App;
