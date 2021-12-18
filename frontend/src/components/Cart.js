import React from 'react'

const Cart = ({ robots }) => {
    return (
        <div className='text-gray-700 bg-white w-1/4 fixed right-0 mr-2 p-6'>
           <p>Cart Items</p>

           <table class="table-auto">
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
               { robots.map(item => {
                    return (
                        <tr>
                            <img src={item.image} alt="some" />
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    )
                })}
                
                
            </tbody>
            </table>
        </div>
    )
}

export default Cart
