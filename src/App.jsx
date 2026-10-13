import { useEffect, useState } from "react";

import ItemForm from "./components/itemForm";
import ItemList from "./components/itemList";

function App() {
  const [items, setItems] = useState([]);

  const [error, setError] = useState("");

  // GET items
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/items");

      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }

      const data = await response.json();

      setItems(data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Run when component loads
  useEffect(() => {
    fetchItems();
  }, []);

  // POST item
  const addItem = async (item) => {
    try {
      const response = await fetch("http://localhost:3000/api/items", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("Failed to create item");
      }

      const data = await response.json();

      setItems([...items, data.item]);
    } catch (error) {
      setError(error.message);
    }
  };

  // DELETE item
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      setItems(items.filter((item) => item._id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <h1>MERN Item Management</h1>

      {error && <p className="error">{error}</p>}

      <ItemForm onItemAdded={addItem} />

      <ItemList items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
