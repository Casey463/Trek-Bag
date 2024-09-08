import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ packedItemsTotal }) {
  return (
    <header>
      <Logo />
      <Counter packedItemsTotal={packedItemsTotal} />
    </header>
  );
}
