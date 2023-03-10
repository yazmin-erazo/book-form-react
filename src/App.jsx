import { useState } from "react";
import Form from "./components/Bibliographic-Record/Form/Form";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
