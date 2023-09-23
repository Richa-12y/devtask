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

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(`Updating ${name} with value: ${value}`);

    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message for the current field
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for empty fields and update the errors state
    const newErrors = {};
    for (const fieldName in formData) {
      if (!formData[fieldName]) {
        alert((newErrors[fieldName] = `Please enter your ${fieldName}`));
      }
    }

    // If there are errors, set them in the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // If no errors, proceed with form submission
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div className="App">
      <section className="w-full h-screen bg-[#706b6b] flex flex-col justify-center items-center">
        <FeedbackForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </section>
    </div>
  );
}

export default App;
