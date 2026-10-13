import { useState } from "react";

function ItemForm({ onItemAdded }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newItem = {
      name: name,
      description: description,
      price: Number(price),
    };

    await onItemAdded(newItem);

    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>

      <div>
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>

      <div>
        <label>Description</label>

        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />
      </div>

      <div>
        <label>Price</label>

        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          min="0"
          required
        />
      </div>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default ItemForm;
