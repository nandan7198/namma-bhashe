import React from "react";

const RunButton = ({ runCode }) => {
  return (
    <button
      onClick={runCode}
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold w-full"
    >
      ▶️ Run Code
    </button>
  );
};

export default RunButton;
