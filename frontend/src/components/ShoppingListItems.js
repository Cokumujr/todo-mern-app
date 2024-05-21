import React, { useState, useEffect } from "react";
import { BASE_URL } from "../services/configs";
import DeleteShoppingItem from "./DeleteShoppingItem";
import Cookies from "js-cookie"

const ShoppingListItems = () => {
  const [items, setItems] = useState([]);
  const TOKEN = Cookies.get("token")

  // This code deals with deleting a shopping item using a modal
  const [itemToDelete, setItemToDelete] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const selectItemToDelete = async (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };
  const closeDeleteModal = async () => {
    setShowDeleteModal(false);
  };

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(`${BASE_URL}/shopping-list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${TOKEN}`,
        },
      });

      const data = await response.json();
      console.log(data);
      setItems(data.items);
    };
    getItems();
  }, []);

  return (
    <div className="col-8">
      <table className="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((shopping_item, index) => {
            return (
              <tr key={shopping_item._id}>
                <td>{index + 1}</td>
                <td>{shopping_item.item}</td>
                <td>{shopping_item.quantity}</td>
                <td>{shopping_item.total_price}</td>
                <td>
                  <a
                    href={`/shopping-list/${shopping_item._id}`}
                    className="btn btn-info btn-sm"
                  >
                    <i className="bi bi-eye"></i>
                  </a>
                </td>
                <td>
                  <a
                    href={`/shopping-list/${shopping_item._id}/edit`}
                    className="btn btn-primary btn-sm"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                </td>
                <td>
                  <a
                    href="#"
                    className="btn btn-danger btn-sm"
                    onClick={() => selectItemToDelete(shopping_item)}
                  >
                    <i className="bi bi-trash"></i>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showDeleteModal && (
        <DeleteShoppingItem
          item={itemToDelete}
          closeDeleteModal={closeDeleteModal}
        />
      )}
    </div>
  );
};

export default ShoppingListItems;
