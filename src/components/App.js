import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // Lifting state, moving state to closest common parent
  const [items, setItems] = useState([]);

  // lift function so it lives where state does

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleRemoveAllItems() {
    const confirmed = window.confirm(
      "Are you sure you wish to clear the list?"
    );
    if (confirmed) setItems([]);
  }

  function handlePackItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onPackItem={handlePackItem}
        onRemoveAllItems={handleRemoveAllItems}
      />
      <Stats items={items} />
    </div>
  );
}
