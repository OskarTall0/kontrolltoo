const Button = ({ children, textOnly, onClick }) => {
  return (
    <button className={textOnly ? "text-button" : "button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
