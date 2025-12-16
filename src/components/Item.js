// function Item({ id, description, quantity, packed }) {
export default function Item({ item, onRemoveItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onPackItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>{" "}
      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  );
}
