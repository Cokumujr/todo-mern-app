import React from 'react';
import NewShoppingItem from './NewShoppingItem';
import ShoppingListItems from './ShoppingListItems';

const ShoppingList = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <h4 className='text-center'>Shopping List</h4>
        <hr/>
      </div>
      <div className='row'>
        <NewShoppingItem />
        <ShoppingListItems />
    </div>
    </div>
    
  )
}

export default ShoppingList