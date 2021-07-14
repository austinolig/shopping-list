import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";
import axios from "axios";
import { useEffect, useState } from "react";

// TO-DO //
// ADD ROUTER FOR ABOUT PAGE
// TOGGLE IMPORTANT
// SORT BY DATE ADDED, IMPORTANCE, ALPHABETICAL (ASC/DSC), SORT BY STORE (IF MULTISTOP)
// ex. by: date added, importance+date added, importance+alpha,
// ADD PRICE FIELD AND NOTES?
// ENTER PRICE AMOUNT TO BE TOTALLED AT THE END (OPTIONAL FIELD)
// CUSTOM ITEMS OR SELECT ITEM FROM INVENTORY LIST (FAKE GROCERY)
// MAKING MULTIPLE STOPS? SHOW OPTION TO ADD A STORE NAME

const App = () => {
  const [items, setItems] = useState([]);

  // GET ITEMS
  const getItems = async () => {
    const res = await axios.get("http://localhost:5000/items");
    const itemsFromServer = res.data;
    console.log(itemsFromServer);
    setItems(itemsFromServer);
  };

  // ADD ITEM
  const addItem = async (item) => {
    const res = await axios.post("http://localhost:5000/items", item);
    console.log("Add!", res);
    setItems([...items, res.data]);
  };

  // UPDATE ITEM
  const updateItem = async (id, item) => {
    const res = await axios.put(`http://localhost:5000/items/${id}`, {
      id: item.id,
      name: item.name,
      important: item.important,
      quantity: item.quantity,
    });
    const updatedItem = res.data;
    console.log("Update!", res);
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  };

  // DELETE ITEM
  const deleteItem = async (id) => {
    const res = await axios.delete(`http://localhost:5000/items/${id}`);
    setItems(items.filter((item) => item.id !== id));
    console.log("Delete!", res);
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
