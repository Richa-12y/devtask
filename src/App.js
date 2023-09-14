import { useState } from "react";
import "./App.css";
import FeedbackForm from "./component/FeedbackForm";

function App() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="App">
      <section className="w-full h-screen bg-[#a4a3a3] flex flex-col justify-center items-center">
        <FeedbackForm
          name={name}
          setName={setName}
          last={last}
          setLast={setLast}
          email={email}
          setEmail={setEmail}
        />
      </section>
    </div>
  );
}

export default App;
