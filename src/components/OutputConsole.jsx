import React from "react";

const OutputConsole = ({ output }) => {
  return (
    <div className="mt-4 bg-gray-100 p-2 rounded border">
      <pre className="text-gray-800">{output}</pre>
    </div>
  );
};

export default OutputConsole;
