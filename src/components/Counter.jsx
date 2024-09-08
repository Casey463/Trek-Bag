export default function Counter({ packedItemsTotal }) {
  return (
    <p>
      <b>
        {packedItemsTotal.packed}/{packedItemsTotal.total}
      </b>{" "}
      items packed
    </p>
  );
}
