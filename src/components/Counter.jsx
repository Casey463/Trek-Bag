export default function Counter({ totalItemsPacked, totalItems }) {
  return (
    <p>
      <b>
        {totalItemsPacked}/{totalItems}
      </b>{" "}
      items packed
    </p>
  );
}
