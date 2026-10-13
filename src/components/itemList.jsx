function ItemList({ items, onDelete }) {
  return (
    <div>
      <h2>Items</h2>

      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        items.map((item) => (
          <div className="item" key={item._id}>
            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <p>Price: ₹{item.price}</p>

            <button onClick={() => onDelete(item._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
