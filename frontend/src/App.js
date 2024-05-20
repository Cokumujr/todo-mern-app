import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";
import TodoDetail from "./components/TodoDetail";
import ShoppingItemDetails from "./components/ShoppingItemDetails";


function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact element={<Todos />} /> 
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/shopping-list" element={<ShoppingList />} />  
          <Route path="/shopping-list/:id" element={<ShoppingItemDetails />} />      
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
