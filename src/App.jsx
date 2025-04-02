import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputConsole from "./components/OutputConsole";
import RunButton from "./components/RunButton";
import { translateToJS } from "./interpreter";
import logo from "./assets/logo.png";

const App = () => {
  const [code, setCode] = useState(
    "hi maga\nhel maga 'Hello NammaBhashe!';\nbye maga"
  );
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      let translatedCode = translateToJS(code);
      let consoleOutput = "";
      const customConsole = {
        log: (msg) => (consoleOutput += msg + "\n"),
      };
      new Function("console", translatedCode)(customConsole);
      setOutput(consoleOutput);
    } catch (error) {
      setOutput("❌ Error: " + error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white ">
      {/* Header */}
      <div className="flex justify-center bg-slate-800 p-4 text-2xl font-bold">
        <img src={logo} className="w-10 h-auto" />
        <h1 className="pl-4">ನಮ್ಮ ಭಾಷೆ</h1>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 max-w-3xl mx-auto">
        {/* Code Editor Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">
            Write NammaBhashe Code:
          </h2>
          <CodeEditor code={code} setCode={setCode} />
          <RunButton runCode={runCode} />
        </div>

        {/* Output Section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Output:</h2>
          <OutputConsole output={output} />
        </div>

        {/* Guidelines Section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">
            📜 How to Use NammaBhashe?
          </h2>
          <p className="text-gray-300 mb-4">
            NammaBhashe is a simple kannada toy programming language. Follow
            these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Write NammaBhashe code in the editor above.</li>
            <li>
              Click{" "}
              <span className="bg-blue-500 px-2 py-1 rounded">Run Code</span> to
              execute it.
            </li>
            <li>Check the translated JavaScript output below.</li>
          </ol>
        </div>

        {/* Examples Section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-3">📝 Example Code</h2>
          <p className="text-gray-300 mb-4">Here are some example programs:</p>

          {/* Example 1 - Variable Declaration & Printing */}
          <div className="mb-4 p-3 bg-gray-700 rounded">
            <h3 className="font-semibold text-yellow-300">
              🟢 Print & Variables
            </h3>
            <pre className="text-gray-300">
              hi maga
              <br />
              maga idu x = 10;
              <br />
              hel maga "Value of x is " + x;
              <br />
              bye maga
            </pre>
          </div>

          {/* Example 2 - Conditional Statements */}
          <div className="mb-4 p-3 bg-gray-700 rounded">
            <h3 className="font-semibold text-yellow-300">
              🔵 If-Else Condition
            </h3>
            <pre className="text-gray-300">
              hi maga
              <br />
              maga idu x = 10;
              <br />
              nod maga (x &gt; 5) adre
              <br />
              &nbsp;&nbsp;hel maga "x is greater than 5";
              <br />
              illa andre
              <br />
              &nbsp;&nbsp;hel maga "x is not greater than 5";
              <br />
              bye maga
            </pre>
          </div>

          {/* Example 3 - Loop */}
          <div className="p-3 bg-gray-700 rounded">
            <h3 className="font-semibold text-yellow-300">🟣 Loops</h3>
            <pre className="text-gray-300">
              hi maga
              <br />
              maga idu x = 5;
              <br />
              maga (x &gt; 0) ago tanka
              <br />
              &nbsp;&nbsp;hel maga x;
              <br />
              &nbsp;&nbsp;x = x - 1;
              <br />
              bye maga
            </pre>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 p-4 text-center">
        Made with ❤️ by
        <a
          href="https://www.github.com/nandan7198"
          className="text-blue-400 hover:underline ml-1"
        >
          Nandan S
        </a>
      </footer>
    </div>
  );
};

export default App;
