import React, { useState } from 'react'

const NewShoppingItem = () => {
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const BASE_URL = "http://localhost:5000/api"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzA1NzJiNDA2ZGY5MTQwZTczMTVkIiwidXNlcm5hbWUiOiJwYXVsbmRhbWJvIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIn0sImlhdCI6MTcxNTkzMDUyNSwiZXhwIjoxNzE1OTY2NTI1fQ.6ReW8VHxVDnruQnI1XckJm3--uwCgRo597VUs850eR0"


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
                        "Authorization": `${token}`
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