import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL, TOKEN } from '../services/configs';

const ShoppingListItems = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async() => {
            const response = await fetch(`${BASE_URL}/shopping-list`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${TOKEN}`
                }
            })

            const data = await response.json()
            console.log(data)
            setItems(data.items)
        }
        getItems()
    }, [])

  return (
    <div className='col-8'>
        <table className='table table-striped table-sm table-responsive'>
            <thead>
                <th>ID</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
            </thead>
            <tbody>
            {items.map((shopping_item, index) => {
                return <tr key={shopping_item._id}>
                <td>{index + 1}</td>
                <td>{shopping_item.item}</td>
                <td>{shopping_item.quantity}</td>
                <td>{shopping_item.total_price}</td>
                <td>
                    <a href={`/shopping-list/${shopping_item._id}`} className='btn btn-info btn-sm'><i className="bi bi-eye"></i></a>
                </td>
                <td>
                    <a href='#' className='btn btn-primary btn-sm'><i className="bi bi-pencil-square"></i></a>
                </td>
                <td>
                    <a href='#' className='btn btn-danger btn-sm'><i className="bi bi-trash"></i></a>
                </td>
            </tr>
            })}
                
            </tbody>
        </table>
    </div>
  ) 
}

export default ShoppingListItems