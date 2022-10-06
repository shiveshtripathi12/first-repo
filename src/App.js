import { useState, useEffect, useRef } from "react";
import Welcome from "./Welcome";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [boolean, setBoolean] = useState(false);
  const [input, setInput] = useState("");
  const mounted = useRef(false)
  useEffect(() => {
    mounted.current = true;
    console.log(mounted.current);
    return () => {
      mounted.current= false;
      console.log(mounted.current);
     
    };
  }, [state]);
 /* useEffect(() => {
    console.log("useeffect2 ran");
    return () => {
      console.log("cleanup2 ran");
     setState(0)
    };
  }, [state]);*/
  console.log("render");
  return (
    <div className="App">
      <h2>Counter</h2>
      <h3>Created Branch</h3>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <p>{input}</p>
      <h2>Count: {state}</h2>
      <button onClick={() => setState((prev) => prev + 1)}>Update state</button>
      <button onClick={() => setBoolean((prev) => !prev)}>Show boolean</button>
      {boolean && <h2>Booooo!!</h2>}
    </div>
  );
}

export default App;
