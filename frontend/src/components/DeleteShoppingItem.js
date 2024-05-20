import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN, BASE_URL } from '../services/configs';

const DeleteShoppingItem = ({item, closeDeleteModal}) => {
    const [deletedItem, setDeletedItem] = useState(null);
    const navigate = useNavigate()

    const handleDeleteSubmit = (e) => {
        e.preventDefault();

        console.log({ message: "Modal Form Submitted!!", deleted_item: deletedItem, my_item: item._id })

        const deleteShoppingItem = async(e) => {
            const response = await fetch(`${BASE_URL}/shopping-list/${item._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${TOKEN}`
                }
            })
            if(response.ok) {
                closeDeleteModal(true)
                window.location.reload()
            } else {
                alert("Item could not be deleted, something went wrong!!")
            }
        }
        deleteShoppingItem()
    }

  return (
    <div className="modal bg-secondary" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fs-5">Delete Shopping Item</h5>
        </div>
        <div className="modal-body">
          <form onSubmit={handleDeleteSubmit}>
            <div className='row mb-3'>
              <div className='col'>
                <p>Are you sure you want to delete agent: <b>{item.item}</b></p>
              </div>
            </div>
            <input type='text' hidden name="item_id" id="item_id" value={item._id} onChange={(e) => setDeletedItem(e.target.value)} readOnly/> 

            <div className='row text-center'>
                <div className='col'>
                <button type="submit" className="btn btn-danger">Yes, Delete!</button>
                </div>
                <div className='col'>
                <button type="button" className="btn btn-info" onClick={closeDeleteModal}>No, Close</button>
                </div>
            </div>  
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DeleteShoppingItem