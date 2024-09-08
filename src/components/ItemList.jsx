export default function ItemList({ items = "" }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  console.log("rendering");
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
}
