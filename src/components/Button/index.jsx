const Button = ({
  children,
  width,
  height,
  isIcon,
  fontSize = "25px",
  backgroundColor,
  color,
  onClick,
  disabled = false,
  padding = "5px"
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: width,
        display:"inline-block",
        textAlign: "center",
        height: height,
        border: isIcon && "none",
        backgroundColor: disabled
          ? "var(--grey)"
          : backgroundColor
          ? backgroundColor
          : isIcon && "transparent",
        fontSize: fontSize,
        color: color,
        padding: padding
      }}
    >
      {children}
    </button>
  );
};

export default Button;
