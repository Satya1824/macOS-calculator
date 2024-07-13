interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  const bgColor = () => {
    if (["÷", "×", "-", "+", "="].includes(value)) {
      return "#fea005";
    } else if (!isNaN(Number(value)) || value === ".") {
      return "#59595c";
    } else {
      return "#38393b";
    }
  };

  const hoverColor = () => {
    if (["÷", "×", "-", "+", "="].includes(value)) {
      return "#ffad33";
    } else if (!isNaN(Number(value)) || value === ".") {
      return "#6d6d70";
    } else {
      return "#4b4c4e";
    }
  };

  const activeColor = () => {
    if (["÷", "×", "-", "+", "="].includes(value)) {
      return "#cc8400";
    } else if (!isNaN(Number(value)) || value === ".") {
      return "#4d4d4f";
    } else {
      return "#2b2c2e";
    }
  };

  return (
    <button
      className={`p-4 text-white ${
        value === "0" ? "col-span-2" : "col-span-1"
      }`}
      style={{
        backgroundColor: bgColor(),
        transition: "background-color 0.2s",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = hoverColor())
      }
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = bgColor())}
      onMouseDown={(e) =>
        (e.currentTarget.style.backgroundColor = activeColor())
      }
      onMouseUp={(e) => (e.currentTarget.style.backgroundColor = hoverColor())}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
