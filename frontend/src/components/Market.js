import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Moment from 'react-moment';
import Cart from './Cart';

const Market = ({ robots, cart }) => {
    
    return (
        <div className='grid grid-cols-12 grid-rows-auto gap-6'>
        {
            robots.map(item => {
                return (
                 <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-600 text-white relative robot-card" key={item.name}>
                    <div className='absolute top-0 right-0 font-bold text-lg bg-red-500 text-white px-4 py-3 stock'>
                        <p className='text-center'>{item.stock === 0 ? 'Out Of Stock' : `Stock left : ${item.stock}`}</p>
                    </div>
                    
                <div className="p-6 ">
                <div className="image">
                    <img src={item.image} alt={item.name}/>
                </div>

                <div className="text-center my-8">
                <div className="flex justify-between items-center my-4">
                    <Moment format="DD-MM-YYYY" date={item.createdAt} className='font-bold date'/>
                    <p className='font-semiBold material'> {item.material}</p>
                </div>

                    <p className='text-2xl font-Bold mb-2'>{item.name}</p>
                    <p className='text-yellow-400 text-xl font-bold mb-2'>฿ {item.price}</p>
                </div>
                {
                    item.stock === 0 ? '' :  <Cart cart={cart} />
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
