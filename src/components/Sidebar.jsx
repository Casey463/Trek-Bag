import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetAllItems={handleResetAllItems}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
