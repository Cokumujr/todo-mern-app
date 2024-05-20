import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL, TOKEN } from '../utils/configs';

const ShoppingItemDetails = () => {
    const [shoppingItem, setShoppingItem] = useState({});

    const { id } = useParams();

    console.log({ item_id: id })

    useEffect(() => {
        const getShoppingListItem = async() => {
            const response = await fetch(`${BASE_URL}/shopping-list/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${TOKEN}`
                }
            })
            const data = await response.json()
            setShoppingItem(data)
            console.log({ data })
        }
        getShoppingListItem()
    }, [id])

  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-4'></div>
            <div className='col-4'>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{shoppingItem.item}</h5>
                    
                    <p className="card-text">Quantity: {shoppingItem.quantity}</p>
                    <p className="card-text">Total Cost: {shoppingItem.total_price}</p>
                    <hr/>
                    <div className='text-center'>
                        <a href='#' className='btn btn-primary'>
                        <i className="bi bi-pencil-square"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}

export default ShoppingItemDetails