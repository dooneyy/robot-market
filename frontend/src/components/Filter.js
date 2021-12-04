import React from 'react'

const Filter = ({  uniqueMaterials, filterItems }) => {
    return (
        uniqueMaterials.map(material => {
                  return (
                     <button className='font-semiBold material text-white m-2' onClick={() => filterItems(material)}>{material}</button> 
                  
                  )
              })
    )
}

export default Filter
