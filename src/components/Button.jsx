export default function Button({ onCLick, buttonType, children }) {
  return (
    <button
      onClick={onCLick}
      className={`btn ${buttonType === "secondary" && "btn--secondary"}`}
    >
      {children}
    </button>
  );
}
