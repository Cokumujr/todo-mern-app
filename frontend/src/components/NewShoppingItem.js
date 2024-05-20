import React, { useState } from 'react';
import { BASE_URL, TOKEN } from '../utils/configs'


const NewShoppingItem = () => {
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const shoppingItem = {
            item: item,
            quantity: quantity,
            total_price: totalPrice
        }
        console.log(shoppingItem)

        const createItem = async() => {
            try {
                const response = await fetch(`${BASE_URL}/shopping-list`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${TOKEN}`
                    },
                    body: JSON.stringify(shoppingItem)
                })
                if(response.ok) {
                    window.location.reload()
                } else {
                    alert("Something Went Wrong!!")
                }
                
            } catch (error) {
                console.log(error.message)
            }
               
        }
        createItem()
    }

    

  return (
    <div className='col-4'>
        <form onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label className='form-label'>Item Name</label>
                <input type="text" className='form-control' onChange={(e) => setItem(e.target.value)} />
            </div>
            <div className='mb-2'>
                <label className='form-label'>Item Quantity</label>
                <input type="number" className='form-control' onChange={(e) => setQuantity(e.target.value)} />
            </div>
            <div className='mb-2'>
                <label className='form-label'>Total Price</label>
                <input type="number" className='form-control' onChange={(e) => setTotalPrice(e.target.value)} />
            </div>
            <div className='text-center'>
                <button type='submit' className='btn btn-success'>Submit Data</button>
            </div>
        </form>
    </div>
  )
}

export default NewShoppingItem