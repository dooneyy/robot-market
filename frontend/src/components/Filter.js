import React from 'react'

const Filter = ({allCategories, filterItems }) => {
    return (
       allCategories.map(material => {
        return (
            <button 
            type='button' 
            className='font-semiBold material text-white m-2' 
            key={material}
            onClick={() => filterItems(material)} >
                    {material}
            </button> 
        )
    })
    )
}

export default Filter