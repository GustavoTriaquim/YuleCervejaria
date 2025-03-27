function Button({ bType, children }) {
  return (
    <button type={bType}>
      {children}
    </button>
  );
}

export default Button;