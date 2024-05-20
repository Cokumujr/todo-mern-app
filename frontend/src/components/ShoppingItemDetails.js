import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL, TOKEN } from '../services/configs';

const ShoppingItemDetails = () => {
    const [item, setItem] = useState({});

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
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
  )
}

export default ShoppingItemDetails