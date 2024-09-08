import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemText.trim()) {
      alert("Item can't be empty");
      inputRef.current.focus();
    }
    setItems((prevItems) => [
      ...prevItems,
      { id: Date.now(), name: itemText, packed: false },
    ]);
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
