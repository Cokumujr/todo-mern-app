import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import ShoppingList from "./components/ShoppingList";


function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" exact element={<Todos />} /> 
          <Route path="/shopping-list" element={<ShoppingList />} />        
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
