import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Moment from 'react-moment';

const Market = ({ name, stock, image, createdAt, material, price }) => {
    
    return (
        <div className="col-span-4 bg-gray-600 text-white relative robot-card">
                    <div className='absolute top-0 right-0 font-bold text-lg bg-red-500 text-white px-4 py-3 stock'>
                        <p className='text-center'>{stock === 0 ? 'Out Of Stock' : `Stock left : ${stock}`}</p>
                    </div>
                    
                <div className="p-6 ">
                <div className="image">
                    <img src={image} alt={name}/>
                </div>

                <div className="text-center my-8">
                <div className="flex justify-between items-center my-4">
                    <Moment format="DD-MM-YYYY" date={createdAt} className='font-bold date'/>
                    <p className='font-semiBold material'> {material}</p>
                </div>

                    <p className='text-2xl font-Bold mb-2'>{name}</p>
                    <p className='text-yellow-400 text-xl font-bold mb-2'>฿ {price}</p>
                </div>

                {
                    stock === 0 ? '' :  
                    <button className='justify-self-center flex justify-center items-center text-center p-6 bg-red-500 hover:bg-red-700 rounded w-3/4 h-12'>
                        <AiOutlineShoppingCart className='text-2xl mr-4' /> Add to cart
                    </button>
                }

                </div> 
                </div>
       
    )
}

export default Market
