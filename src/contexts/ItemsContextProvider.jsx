import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants.js";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (item) => {
    const newItems = [...items, item];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleCheckItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  //
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  //
  const handleResetAllItems = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const packedItemsTotal = {
    packed: items.filter((item) => item.packed).length,
    total: items.length,
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext
      value={
        (items,
        handleAddItem,
        handleDeleteItem,
        handleToggleCheckItem,
        handleRemoveAllItems,
        handleResetAllItems,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        packedItemsTotal)
      }
    >
      {children}
    </ItemsContext>
  );
}
