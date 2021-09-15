import "./App.css";
import Form from "./components/Form";
import User from "./components/User";
import { useState } from "react";
function App() {
  const [info, setInfo] = useState();
  const [card, setCard] = useState(false);
  const [form, setForm] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        {form && (
          <Form
            info={info}
            setInfo={setInfo}
            setCard={setCard}
            setForm={setForm}
          />
        )}
        {card && <User info={info} setCard={setCard} setForm={setForm} />}
      </header>
    </div>
  );
}

export default App;
