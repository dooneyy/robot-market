import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Cart = ({ cart }) => {
    return (
         <button className='justify-self-center flex justify-center items-center text-center p-6 bg-red-500 hover:bg-red-700 rounded w-3/4 h-12' onClick={cart}>
            <AiOutlineShoppingCart className='text-2xl mr-4' /> Add to cart
        </button>
    )
}

export default Cart
