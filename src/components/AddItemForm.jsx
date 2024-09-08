import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText.trim()) {
      alert("Item can't be empty");
      inputRef.current.focus();
    }

    const newItem = { id: Date.now(), name: itemText, packed: false };
    onAddItem(newItem);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        value={itemText}
        ref={inputRef}
        onChange={(e) => setItemText(e.target.value)}
        type="text"
        placeholder="Enter text here..."
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
