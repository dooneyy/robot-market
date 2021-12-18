import React, { useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import Filter from './Filter';


const Header = ({counter, allCategories, filterItems, robots}) => {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true)
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
    <header className=''>
        <div className="flex justify-between items-center mb-12">
            <p className='font-bold text-3xl'>Robot Market</p>
            <button className='flex justify-center items-center' onClick={showModal}>
                <AiOutlineShoppingCart className='text-3xl mr-2' /><sup>{counter}</sup>
            </button>
        </div>

        <div>
            <p className='text-xl font-bold mb-2'>Product Material</p>
                <div className="flex justify-around items-center flex-wrap mr-6">
                    <Filter allCategories={allCategories} filterItems={filterItems} />
                </div>
        </div> 
    </header>
    )
}

export default Header
