import React from "react";
import Editor, { Monaco } from "@monaco-editor/react";
import { getShikiHighlighter } from "@/utils/shiki";
import { shikiToMonaco } from "@shikijs/monaco";
import { EditorThemes } from "@/data/EditorThemes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const CodeEditor = () => {
  const monacoRef = React.useRef<Monaco | null>(null);
  const [codeTheme, setCodeTheme] = React.useState("vitesse-dark");

  const [code, setCode] = React.useState(`
  enum LogLevel {
    ERROR,
    WARN,
    INFO,
    DEBUG,
  }
  
  /**
   * This is equivalent to:
   * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
   */
  type LogLevelStrings = keyof typeof LogLevel;
  
  function printImportant(key: LogLevelStrings, message: string) {
    const num = LogLevel[key];
    if (num <= LogLevel.WARN) {
      console.log("Log level key is:", key);
      console.log("Log level value is:", num);
      console.log("Log level message is:", message);
    }
  }
  printImportant("ERROR", "This is a message");
  `);

  async function handleEditorDidMount(_, monaco: Monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;

    const shikiHighlighter = await getShikiHighlighter();

    shikiToMonaco(shikiHighlighter, monaco);
    monaco.languages.register({ id: "vue" });
    monaco.languages.register({ id: "typescript" });
    monaco.languages.register({ id: "javascript" });
    monaco.editor.setTheme(codeTheme);
  }

  const onThemeChange = (_value: string) => {
    monacoRef.current?.editor.setTheme(_value);
    setCodeTheme(_value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <Select onValueChange={onThemeChange} value={codeTheme}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          {EditorThemes.map((theme) => (
            <SelectItem value={theme.value}>{theme.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Editor
        height="30vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(_code) => setCode(_code || "")}
        theme={codeTheme}
        onMount={handleEditorDidMount}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
    </div>
  );
};
