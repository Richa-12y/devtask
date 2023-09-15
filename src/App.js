import { useState } from "react";
import "./App.css";
import FeedbackForm from "./component/FeedbackForm";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });
  return (
    <div className="App">
      <section className="w-full h-screen bg-[#a4a3a3] flex flex-col justify-center items-center">
        <FeedbackForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      </section>
    </div>
  );
}

export default App;
