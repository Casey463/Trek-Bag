import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button type="secondary" key={buttonText}>
          {buttonText}
        </Button>
      ))}
    </section>
  );
}
