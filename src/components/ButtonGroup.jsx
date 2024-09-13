import { useItemsStore } from "../stores/ItemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const resetAllItems = useItemsStore((state) => state.resetAllItems);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onCLick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onCLick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onCLick={resetAllItems} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onCLick={removeAllItems} buttonType="secondary">
        Remove all items
      </Button>
    </section>
  );
}
