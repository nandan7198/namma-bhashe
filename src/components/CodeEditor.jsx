import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";

const CodeEditor = ({ code, setCode }) => {
  return (
    <CodeMirror
      value={code}
      height="200px"
      theme={dracula}
      extensions={[javascript()]}
      onChange={(value) => setCode(value)}
      basicSetup={{
        lineNumbers: true,
        foldGutter: true,
        highlightActiveLine: true,
      }}
    />
  );
};

export default CodeEditor;
