import { useState, useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { LiveProvider, LivePreview } from "react-live";
import { Terminal } from '@xterm/xterm';
import SplitPane from 'react-split-pane';
import "./editor.css"


interface CodeProps {
  code: string;
}

const NewEditor = ({ code: defaultCode }: CodeProps) => {
  const [code, setCode] = useState(defaultCode);
  const [editorWidth, setEditorWidth] = useState(50); // Initial width set to 50vw
  const [isDragging, setIsDragging] = useState(false); // State for dragging
  const xtermRef = useRef(false);


  useEffect(() => {
    const terminal = new Terminal();
    // if (xtermRef) {
    //   terminal.open(xtermRef.current);
    // }

    terminal.writeln('Welcome to the terminal!');

    // Cleanup on component unmount
    return () => {
      terminal.dispose(); // Dispose terminal instance
    };
  }, []);


  // Event handler for editor value change
  const handleOnChange = (value?: string) => {
    setCode(value || '');
  };

  // Event handler for mouse move
  const handleMouseMove = (event: React.MouseEvent) => {
    console.log(event)
    if (isDragging) {
      const newEditorWidth = Math.max(
        30, // Minimum width of 30vw
        Math.min(
          70, // Maximum width of 70vw
          (event.clientX / window.innerWidth) * 100 // Calculate width percentage
        )
      );
      setEditorWidth(newEditorWidth);
    }
  };

  // Event handler for mouse up
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Variables to track dragging state and initial mouse position
  let offsetX = 0;

  return (
    <div className="flex justify-center" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <div className="min-h-screen" style={{ width: `${editorWidth}vw` }}> {/* Use vw unit */}
        <Editor
          className="h-screen"
          defaultLanguage="javascript"
          defaultValue={code.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: true }, // Show minimap
            contextmenu: true, // Enable context menu
            wordWrap: "on", // Enable word wrap
            automaticLayout: true, // Automatically adjust the editor's layout upon resizing
            scrollBeyondLastLine: false, // Disable scrolling beyond the last line of the editor
            lineNumbers: "on", // Show line numbers
            cursorBlinking: "solid", // Set cursor blinking style
            renderWhitespace: "all", // Render all whitespace characters
            scrollBeyondLastColumn: 2, // Allow scrolling beyond the last column by a specified number of characters
            readOnly: false, // Set editor to read-only mode
            renderLineHighlight: "line", // Set line highlighting style
            scrollbar: { vertical: "auto", horizontal: "auto" }, // Set scrollbar visibility
            cursorStyle: "block", // Set cursor style
            dragAndDrop: true, // Enable drag and drop editing
            suggestOnTriggerCharacters: true, // Show suggestions when typing trigger characters
            acceptSuggestionOnCommitCharacter: true, // Automatically accept suggestions on commit character
            acceptSuggestionOnEnter: "on", // Automatically accept suggestions on Enter key
            quickSuggestions: { other: true, comments: false, strings: true }, // Configure quick suggestions behavior

          }}
          onChange={handleOnChange}
        />
        <div className="terminal" id='terminal' />
      </div>

      <div
        className="handle"
        onMouseDown={(event) => {
          setIsDragging(true);
          offsetX = event.clientX - (editorWidth / 100) * window.innerWidth; // Calculate initial offsetX
        }}
      />

      <div className="min-h-screen bg-white text-black" style={{ width: `${100 - editorWidth}vw` }}> {/* Use vw unit */}
        <LiveProvider code={code}>
          <LivePreview />
        </LiveProvider>
      </div>
    </div>
  );
};

export default NewEditor;
