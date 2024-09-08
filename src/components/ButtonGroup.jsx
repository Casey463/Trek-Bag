import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetAllItems,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button onCLick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onCLick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onCLick={handleResetAllItems} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onCLick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
