import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Moment from 'react-moment';

const Market = ({ robots, setCount }) => {

    return (
    <div className='grid grid-cols-12 grid-rows-auto gap-5 w-3/4'>
        {
            robots.map((item) => {
                return (
                    <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white text-white relative robot-card" key={item.name}>
                        <div className='absolute top-0 right-0 font-bold text-lg bg-red-500 text-white px-4 py-3 stock'>
                            <p className='text-center'>{item.stock === 0 ? 'Out Of Stock' : `Stock left : ${item.stock}`}</p>
                        </div>

                        <div className="p-6 ">
                            <div className="image">
                                <img src={item.image} alt={item.name} className='w-2/4 mx-auto'/>
                            </div>

                        <div className="text-center my-8">
                            <div className="flex justify-between items-center my-4">
                                <Moment format="DD-MM-YYYY" date={item.createdAt} className='font-bold date'/>
                                <p className='font-semiBold material'> {item.material}</p>
                            </div>

                            <p className='text-2xl font-Bold mb-2 text-gray-900'>{item.name}</p>
                            <p className='text-yellow-600 text-xl font-bold mb-2'>฿ {item.price}</p>
                        </div>
                        {item.stock === 0 ?  
                        <button className='flex justify-center items-center text-center p-6 bg-red-300 rounded w-3/4 h-12 mx-auto' disabled = "true" >
                                <AiOutlineShoppingCart className='text-2xl mr-4' /> Add to cart
                            </button> : 
                            <button className='flex justify-center items-center text-center p-6 bg-red-500 hover:bg-red-700 rounded w-3/4 h-12 mx-auto' 
                            onClick={setCount}>
                                <AiOutlineShoppingCart className='text-2xl mr-4' /> Add to cart
                            </button>
                        }
                        </div> 
                    </div> 
                )
            })
        }
    </div>
    )
}

export default Market
