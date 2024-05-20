import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BASE_URL, TOKEN } from '../services/configs';

const EditShoppingListItem = () => {
    const [shoppingItem, setShoppingItem] = useState({ item: '', quantity: '', totalPrice: '' });
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    
    
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getItem = async() => {
            try {
                const response = await fetch(`${BASE_URL}/shopping-list/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${TOKEN}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setShoppingItem(data);
                setItem(data.item);
                setQuantity(data.quantity);
                setTotalPrice(data.total_price);
            } catch (error) {
                console.error('Failed to fetch the item:', error);
            }
        };
        getItem();
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const updatedItem = {
            item: item,
            quantity: quantity,
            total_price: totalPrice
        }

        const updateItem = async() => {
            try {
                const response = await fetch(`${BASE_URL}/shopping-list/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `${TOKEN}`
                    },
                    body: JSON.stringify(updatedItem)
                })

                if(response.ok) {
                    navigate(`/shopping-list`)
                } else {
                    alert("Something went wrong, item could not be updated!!")
                }
            } catch (error) {
                console.log({ error: error.message });
                alert(error.message)
            }
        }
        updateItem()

        console.log({ updatedItem });
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label className='form-label'>Item Name</label>
                            <input 
                                type="text" 
                                className='form-control' 
                                value={item} 
                                onChange={(e) => setItem(e.target.value)} 
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='form-label'>Item Quantity</label>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={quantity} 
                                onChange={(e) => setQuantity(e.target.value)} 
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='form-label'>Total Price</label>
                            <input 
                                type="number" 
                                className='form-control' 
                                value={totalPrice} 
                                onChange={(e) => setTotalPrice(e.target.value)} 
                            />
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-success'>Submit Data</button>
                        </div>
                    </form>
                </div>
                <div className='col-4'></div>
            </div>
        </div>
    );
};

export default EditShoppingListItem;
