import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import { evaluate, pi, e, random } from "mathjs";
import ConfettiExplosion from "react-confetti-explosion";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isExploding, setIsExploding] = useState<boolean>(false);
  const [memory, setMemory] = useState<number>(0);
  const [isRadians, setIsRadians] = useState<boolean>(true);

  const checkForSpecialFeature = (expression: string) => {
    const matches = expression.match(/(\d+)\D+(\d+)/);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      if ((num1 === 2 && num2 === 6) || (num1 === 6 && num2 === 2)) {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 3000);
      }
    }
  };

  const clearMemory = () => {
    setMemory(0);
  };

  const addToMemory = () => {
    try {
      const currentValue = evaluate(input.replace("×", "*").replace("÷", "/"));
      setMemory((prevMemory) => prevMemory + currentValue);
    } catch (error) {
      setResult("Error");
    }
  };

  const subtractFromMemory = () => {
    try {
      const currentValue = evaluate(input.replace("×", "*").replace("÷", "/"));
      setMemory((prevMemory) => prevMemory - currentValue);
    } catch (error) {
      setResult("Error");
    }
  };

  const recallMemory = () => {
    setInput(memory.toString());
  };

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      try {
        checkForSpecialFeature(input);
        setResult(evaluate(input.replace("×", "*").replace("÷", "/")));
        setInput("");
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
      clearMemory();
    } else if (value === "C") {
      setInput("");
      setResult("");
      clearMemory();
    } else if (value === "MC") {
      clearMemory();
    } else if (value === "M+") {
      addToMemory();
    } else if (value === "M-") {
      subtractFromMemory();
    } else if (value === "MR") {
      recallMemory();
    } else if (value === "x^y") {
      setInput(input + "^");
    } else if (value === "e^x") {
      setInput(input + "e^");
    } else if (value === "10^x") {
      setInput(input + "10^");
    } else if (value === "1/x") {
      setInput(input + "1/");
    } else if (value === "2√x") {
      setInput(input + "sqrt(");
    } else if (value === "3√x") {
      setInput(input + "cbrt(");
    } else if (value === "y√x") {
      setInput(input + "root(");
    } else if (value === "x!") {
      setInput(input + "!");
    } else if (value === "π") {
      setInput(input + pi.toString());
    } else if (value === "e") {
      setInput(input + e.toString());
    } else if (value === "+/-") {
      setInput((prevInput) => {
        if (prevInput.startsWith("-")) {
          return prevInput.slice(1);
        } else {
          return "-" + prevInput;
        }
      });
    } else if (value === "x^2") {
      setInput(input + "^2");
    } else if (value === "x^3") {
      setInput(input + "^3");
    } else if (value === "EE") {
      setInput(input + "e");
    } else if (value === "Rad") {
      setIsRadians((prev) => !prev);
    } else if (value === "sin") {
      setInput(input + `sin(`);
    } else if (value === "cos") {
      setInput(input + `cos(`);
    } else if (value === "tan") {
      setInput(input + `tan(`);
    } else if (value === "sinh") {
      setInput(input + `sinh(`);
    } else if (value === "cosh") {
      setInput(input + `cosh(`);
    } else if (value === "tanh") {
      setInput(input + `tanh(`);
    } else if (value === "π") {
      setInput(input + pi.toString());
    } else if (value === "Rand") {
      setInput(input + random().toString());
    } else {
      if (input === "" && result !== "") {
        setInput(result + value);
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <div className="bg-[#222327] overflow-hidden rounded-2xl shadow-lg relative">
      <Display input={input} result={result} />
      {isExploding && <ConfettiExplosion />}
      <div className="grid grid-cols-10 gap-[1px]">
        {[
          "(",
          ")",
          "mc",
          "m+",
          "m-",
          "mr",
          "C",
          "+/-",
          "%",
          "÷",
          "2^nd",
          "x^2",
          "x^3",
          "x^y",
          "e^x",
          "10^x",
          "7",
          "8",
          "9",
          "×",
          "1/x",
          "2√x",
          "3√x",
          "y√x",
          "ln",
          "log10",
          "4",
          "5",
          "6",
          "-",
          "x!",
          "sin",
          "cos",
          "tan",
          "e",
          "EE",
          "1",
          "2",
          "3",
          "+",
          "Rad",
          "sinh",
          "cosh",
          "tanh",
          "π",
          "Rand",
          "0",
          ".",
          "=",
        ].map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={() => handleButtonClick(btn)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
