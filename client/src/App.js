import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Items from "./components/Items.js";
import axios from "axios";
import { useEffect, useState } from "react";

// TO-DO //
// ADD ROUTER FOR ABOUT PAGE
// ENTER PRICE AMOUNT TO BE TOTALLED AT THE END (OPTIONAL FIELD)

const App = () => {
  const [items, setItems] = useState([]);

  const testFunction = async (id) => {
    id = 123;
    //var someData = "some data";
    const res = await axios.get(
      `https://2wtmhi8utf.execute-api.us-east-1.amazonaws.com/default/testResource?pet=${id}`
    );
    console.log(res.data.body);
  };

  // const lambdaGetItems = async () => {
  //   console.log("lambda GET (get)");
  //   const res = await axios.get(
  //     `https://2wtmhi8utf.execute-api.us-east-1.amazonaws.com/default/testResource`
  //   );
  //   console.log(res.data.body);
  // };

  // const lambdaAddItem = async (item) => {
  //   console.log("lambda POST (add)");
  //   const res = await axios.post(
  //     `https://2wtmhi8utf.execute-api.us-east-1.amazonaws.com/default/testResource`,
  //     item
  //   );
  //   console.log(res.data.body);
  // };

  // const lambdaUpdateItem = async (id, item) => {
  //   console.log("lambda PUT (update)");
  //   const res = await axios.put(
  //     `https://2wtmhi8utf.execute-api.us-east-1.amazonaws.com/default/testResource?id=${id}`,
  //     {
  //       id: item.id,
  //       name: item.name,
  //       important: item.important,
  //       quantity: item.quantity,
  //     }
  //   );
  //   console.log(res.data.body);
  // };

  // const lambdaDeleteItem = async (id) => {
  //   console.log("lambda DEL (delete)");
  //   const res = await axios.delete(
  //     `https://2wtmhi8utf.execute-api.us-east-1.amazonaws.com/default/testResource?id=${id}`
  //   );
  //   console.log(res.data.body);
  // };

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
      <Footer onPress={testFunction} />
    </div>
  );
};

export default App;
