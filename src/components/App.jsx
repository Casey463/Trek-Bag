import { useState } from "react";
import { initialItems } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  const [items, setItems] = useState(initialItems);

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

  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleResetAllItems = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    console.log("called");
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    console.log("called");
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleCheckItem={handleToggleCheckItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleResetAllItems={handleResetAllItems}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
