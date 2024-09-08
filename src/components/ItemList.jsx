import EmptyView from "./EmptyView";

export default function ItemList({
  items = "",
  handleDeleteItem,
  handleToggleCheckItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onDeleteItem={handleDeleteItem}
          onToggleCheckItem={handleToggleCheckItem}
        />
      ))}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleCheckItem }) {
  return (
    <li className="item">
      <label>
        <input
          onClick={() => onToggleCheckItem(item.id)}
          type="checkbox"
          defaultChecked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
