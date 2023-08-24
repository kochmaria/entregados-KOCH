import { Routes , Route } from "react-router-dom";

import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div>
      
      <Navbar> </Navbar>
      <h1>Tienda</h1>
      <Routes>
        <Route path="" element= {<ItemListContainer/>}/>
        <Route path="/category/:CategoryId" element = {<ItemListContainer/>} />
        <Route path= "/item/:id" element = {<ItemDetailContainer/>} />

      </Routes>
      
    </div>
  )
  
}

export default App;
