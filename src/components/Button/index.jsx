const Button = ({
  children,
  width = "30px",
  height = "30px",
  isIcon,
  fontSize = "25px",
  backgroundColor,
  color,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        height: height,
        border: isIcon && "none",
        backgroundColor: disabled
          ? "var(--grey)"
          : backgroundColor
          ? backgroundColor
          : isIcon && "transparent",
        fontSize: fontSize,
        color: color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
