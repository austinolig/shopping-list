import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  // GET ITEMS
  const getItems = async () => {
    const res = await axios.get("http://localhost:5000/items");
    const itemsFromServer = res.data;
    setItems(() => itemsFromServer);
  };

  // ADD ITEM
  const addItem = async (item) => {
    const res = await axios.post("http://localhost:5000/items/post", item);
    console.log("Add!", res);
    setItems((items) => [...items, res.data]);
  };

  // UPDATE ITEM
  const updateItem = async (id, item) => {
    const res = await axios.patch(`http://localhost:5000/items/update/${id}`, {
      name: item.name,
      important: item.important,
      quantity: item.quantity,
    });
    const updatedItem = res.data;
    console.log("Update!", res);
    setItems((items) =>
      items.map((item) => (item._id === id ? updatedItem : item))
    );
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    const res = await axios.delete(`http://localhost:5000/items/delete/${id}`);
    console.log("Delete!", res);
    setItems(() => items.filter((item) => item._id !== id));
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="app">
      <div className="shoppingList">
        <Header onAdd={addItem} />
        <Items items={items} onDelete={deleteItem} onUpdate={updateItem} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
