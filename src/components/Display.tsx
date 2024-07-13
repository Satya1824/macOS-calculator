import React from "react";

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="text-right p-5 pb-2 rounded-lg h-28 flex flex-col justify-end text-white">
      <div className={`text-4xl font-light ${result !== "" ? "hidden" : ""}`}>
        {input}
      </div>
      <div className={`text-lg text-gray-400 ${result !== "" ? "" : "hidden"}`}>
        {input}
      </div>
      <div className="text-4xl font-light">{result !== "" ? result : ""}</div>
    </div>
  );
};

export default Display;
