import  { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TodoDetail from "./components/TodoDetail";
import ShoppingItemDetails from "./components/ShoppingItemDetails";
import EditShoppingListItem from "./components/EditShoppingListItem";

import Authenticate from "./auth/Authenticate";

import { useState } from "react";


function App() {
  const token = Cookies.get("token")
   console.log({ token: token })
  return (
    <>
    {token ? (
      <div>
      <Navbar token={token} />
      <Router>
        <Routes>
          <Route path="/" exact element={<Todos />} /> 
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/shopping-list" element={<ShoppingList />} />  
          <Route path="/shopping-list/:id" element={<ShoppingItemDetails />} />  
          <Route path="/shopping-list/:id/edit" element={<EditShoppingListItem />} /> 
        </Routes>
      </Router>
    </div>
    ) : (
      <Authenticate />
  )}
 
    </>
  );
}

export default App;
